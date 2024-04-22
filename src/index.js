import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/*import Router, Routes, Router here*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Products from "./Products";
import About from "./About";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
