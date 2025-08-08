import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}