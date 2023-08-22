import React from 'react'
import { Route, Router, Routes } from "react-router-dom"; 
import Home from '../MiddleSection/Home'
import SecondPage from '../MiddleSection/SecondPage';
import { useLocation } from "react-router-dom";

const RouteFiles=()=>{
    const path = useLocation();
    const pageUrl = path.pathname;
    return (
         <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/second" element={<SecondPage />} /> 
         </Routes>
       </Router>
    )
  
}
export default RouteFiles;