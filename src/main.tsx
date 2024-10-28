import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import ErrorPage from "./Pages/ErrorPage";
import MenuPage from "./Pages/MenuPage";
import AboutUs from "./Pages/AboutUs";
import Home from "./Home";
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
   subtitle2: {
      color: 'GrayText',
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="/" element={<Home/>}/>
               <Route path="/menu" element={<MenuPage />} />
               <Route path="/aboutUs " element={<AboutUs />} />
               <Route path="*" element={<ErrorPage />} />
            </Route> 
         </Routes>
      </Router>
      </ThemeProvider>
   </React.StrictMode>
);
