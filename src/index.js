import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//  redux
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//  npm install @reduxjs/toolkit react-redux
//  npm i axios
//  npm i react-icons
// import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
