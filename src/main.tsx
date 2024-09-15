import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import ErrorPage from "./Pages/ErrorPage";
import MenuPage from "./Pages/MenuPage";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
            </Route> 
         </Routes>
        
      </Router>
   </React.StrictMode>
);
