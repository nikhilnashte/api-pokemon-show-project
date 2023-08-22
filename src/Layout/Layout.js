import React from "react";
import logo from './../logo.svg';
import Topbar from "./Topbar";
import MiddleSection from "./MiddleSection";
import Footer from "./Footer";
import RouteFiles from "../Routes/RouteFiles";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "../MiddleSection/Home";
import SecondPage from "../MiddleSection/SecondPage";


function Layout(){
return(
    <>
        <BrowserRouter>
      <div className=" ">
      <div
       className=" ">
       <Topbar/>
      </div> 

    <Routes>
        <Route index element={<Home/>}  />
        <Route path="/secondpage" element={<SecondPage />} /> 
    </Routes>

    <div className=" ">
      <Footer/>
      </div>
    </div>
      
    </BrowserRouter>
    
    </>
);
}
export default Layout;