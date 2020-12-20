import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
   
    return (
        <header>
            <div class="top-bar"> 
                <h1><Link to ="/"><i class="fas fa-film"></i> MDB</Link></h1>
                <button class="nav-button" id="nav-button"><span class="hamburger-icon">&#9776;</span><span class="sr-only">Menu</span></button>
                <nav id="nav-to-toggle">
                    <ul>
                        <li><Link to ="/"><i class="fas fa-home"></i></Link></li>
                        <li><Link to ="/Watchlist">Watchlist</Link></li>
                        <li><Link to ="/About">About</Link></li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;