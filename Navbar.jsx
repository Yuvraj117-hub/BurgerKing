import React from "react"
function Navbar(){
    return (
       <nav id="navbar">
        <ul>
            <li><img src="./burgerking.ico" alt="" /></li>
            <li className="greytext">Dine-in/Take-Away</li>
            <li>Delivery</li>
            <li id="searchbox"><input type="text"  /></li>
            <li className="greytext">Nearby Stores</li>
            <li className="greytext">King Deals</li>
            <li className="greytext">Login</li>
            <li className="greytext">Cart</li>
        </ul>
       </nav>
    )
}
export default Navbar