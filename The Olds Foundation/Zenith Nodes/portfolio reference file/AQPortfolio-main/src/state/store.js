import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar