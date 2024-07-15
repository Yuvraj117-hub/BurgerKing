import React from "react";
function Header(props){
    return(
        <>
        <div id="header">
        <h1>OUR MENU</h1>
        <div className="card"> <img className="cardimage" src="./card1.ico" alt="" />Rs 139 Deal of the Day</div> 
        <div className="card"><img className="cardimage" src="./card2.ico" alt="" />Best combos upto 20% off</div>
        <div className="card"><img className="cardimage" src="./card3.ico" alt="" /> Whopper</div>
        <div className="card"><img className="cardimage" src="./card4.ico" alt="" />Kings Premium Burger</div>
        <div className="card"><img className="cardimage" src="./card5.ico" alt="" />Beverages</div>
        
        </div> 
        
        </>
    )
}
export default Header
