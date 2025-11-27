"""
FastAPI REST API
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import uvicorn

app = FastAPI(
    title="Multi-Purpose API",
    description="Created by Ashraf Siddiqui",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    id: Optional[int] = None
    name: str
    description: str
    price: float
    created_at: Optional[datetime] = None

class User(BaseModel):
    id: Optional[int] = None
    username: str
    email: str
    full_name: str

# In-memory storage
items_db = []
users_db = []
item_counter = 1
user_counter = 1

@app.get("/")
def read_root():
    return {
        "message": "Welcome to the API",
        "author": "Ashraf Siddiqui",
        "github": "https://github.com/AshrafMorningstar",
        "endpoints": ["/items", "/users", "/docs"]
    }

@app.get("/items", response_model=List[Item])
def get_items():
    return items_db

@app.post("/items", response_model=Item)
def create_item(item: Item):
    global item_counter
    item.id = item_counter
    item.created_at = datetime.now()
    item_counter += 1
    items_db.append(item)
    return item

@app.get("/items/{item_id}", response_model=Item)
def get_item(item_id: int):
    for item in items_db:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, updated_item: Item):
    for idx, item in enumerate(items_db):
        if item.id == item_id:
            updated_item.id = item_id
            updated_item.created_at = item.created_at
            items_db[idx] = updated_item
            return updated_item
    raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    for idx, item in enumerate(items_db):
        if item.id == item_id:
            items_db.pop(idx)
            return {"message": "Item deleted"}
    raise HTTPException(status_code=404, detail="Item not found")

@app.get("/users", response_model=List[User])
def get_users():
    return users_db

@app.post("/users", response_model=User)
def create_user(user: User):
    global user_counter
    user.id = user_counter
    user_counter += 1
    users_db.append(user)
    return user

if __name__ == "__main__":
    print(f"Starting API by Ashraf Siddiqui")
    print(f"GitHub: https://github.com/AshrafMorningstar")
    uvicorn.run(app, host="0.0.0.0", port=8000)
