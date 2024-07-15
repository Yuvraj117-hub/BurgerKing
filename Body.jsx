import React from "react";
function Body(){
    return(
        <>
        <div id="body">
        <h1 id="lingdeals">KING DEALS OF THE DAY</h1>
        <div className="bodycard" id="bodycard1"><img className="bodyimage" src="./bkcafe.ico" alt="" /></div>
        <div className="bodycard"><img className="bodyimage" src="./free.ico" alt="" /></div>
        <div className="bodycard"><img className="bodyimage" src="./veggie.ico" alt="" /></div>
        </div>
        <button>EXPLORE FULL MENU</button> 
        <img id="bodyimage" src="./body.ico" alt="" />
        </>
        
       
    )
}
export default Body