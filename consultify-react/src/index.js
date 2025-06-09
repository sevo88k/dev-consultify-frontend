import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/bootstrap.css";
// import "./assets/css/app.min.css";
import "./assets/css/style.css";
// import "./assets/css/icons.min.css";
import "./assets/css/responsive.css";
// import "./assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
// import "./assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
// import "./assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
// import "./assets/fonts/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <Provider store={store}>
     <BrowserRouter basename='/'>
    <ToastContainer limit={1} />
     <App />
    </BrowserRouter>
   
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
