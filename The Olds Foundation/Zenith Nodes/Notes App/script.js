const notesContainer =  document.querySelector(".notes-container")
const createBtn =  document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box");


function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{
  let inputBox = document.createElement("P");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "Assets/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
      e.target.parentElement.remove();
      updateStorage();
  }
  else if(e.target.tagName === "p"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar