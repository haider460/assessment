import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./state-managment/todo";

export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
