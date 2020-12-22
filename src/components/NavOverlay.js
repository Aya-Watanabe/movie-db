import React from 'react'
import {Link} from "react-router-dom";

// export const NavOverlay = () => {

    
//     return (
//         <div className="res-overlay">
//         <span class="close-icon"><i class="fas fa-times fa-3x"></i></span>
//         <ul>
//           <li><Link to ="/"><i class="fas fa-home"></i></Link></li>
//           <li><Link to ="/Watchlist"><i class="far fa-list-alt"></i>W</Link></li>
//           <li><Link to ="/About"><i class="fas fa-users"></i></Link></li>
//         </ul>
//       </div>
//     )
// }

// export default NavOverlay;



export const NavOverlay = () => {
   
    return (
        <header>
            <div class="top-bar"> 
                <h1><Link to ="/"><i class="fas fa-film"></i> MDB</Link></h1>
                <button class="nav-button" id="nav-button"><span class="hamburger-icon">&#9776;</span><span class="sr-only">Menu</span></button>
                <nav id="nav-to-toggle">
                    <ul>
                        <li><Link to ="/"><i class="fas fa-home"></i></Link></li>
                        <li><Link to ="/Watchlist"><i class="far fa-list-alt"></i></Link></li>
                        <li><Link to ="/About"><i class="fas fa-users"></i></Link></li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavOverlay;