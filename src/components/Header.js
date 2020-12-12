import React from "react";



export const Header = () => {
  
   
    return (
        <header>
            <div class="top-bar"> 
                <h1><a href="index.html"><i class="fas fa-film"></i> Movie DB</a></h1>
                <button class="nav-button" id="nav-button"><span class="hamburger-icon">&#9776;</span><span class="sr-only">Menu</span></button>
                <nav id="nav-to-toggle">
                    <ul>
                        <li><a href="#0">Home</a></li>
                        <li><a href="#0">My Favorite</a></li>
                        <li><a href="#0">About</a></li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;