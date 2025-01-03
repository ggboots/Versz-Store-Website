import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ModelView from "./pages/ModelView.jsx"
import BioProfile from "./pages/Portfolio.jsx";
import HomePage from "./pages/HomePage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<BioProfile />}></Route>
        <Route path="ProductPage" element={<ProductPage/>}></Route>
        <Route path="CheckoutPage" element={<CheckoutPage/>}></Route>
        <Route path="ModelView" element={<ModelView/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
