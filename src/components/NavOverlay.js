import React from 'react'
import {Link} from "react-router-dom";

export const NavOverlay = () => {

    
    return (
        <div className="res-overlay">
        <span class="close-icon"><i class="fas fa-times fa-3x"></i></span>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/Watchlist">Watchlist</Link></li>
          <li><Link to ="/About">About</Link></li>
        </ul>
      </div>
    )
}

export default NavOverlay;
