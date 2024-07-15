import React from "react";
import ReactDOM from 'react-dom/client'
import Content from "./Component";

import './Style.css'
// let root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <Content/>
// )
let root=ReactDOM.createRoot(document.getElementById("root")) //using MAP
root.render(
    <>
    {/* <Navbar></Navbar> */}
    <Content></Content>
    
    </>
)