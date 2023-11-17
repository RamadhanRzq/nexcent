import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Service from "./components/Service.jsx";
import Feature from "./components/Feature.jsx";
import Product from "./components/Product.jsx";
import Description from "./components/Description.jsx";
import OurTeam from "./components/OurTeam.jsx";
import { Marketing } from "./components/Marketing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Service />
    <Feature />
    <Product />
    <Description />
    <OurTeam />
    <Marketing />
  </React.StrictMode>
);
