import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
   
    return (
        <header>
            <div class="top-bar"> 
                <h1><Link to ="/"><i class="fas fa-film"></i> MDB</Link></h1>
                
                <nav id="nav-to-toggle">
                    <ul>
                        <li><Link to ="/">
                            <div class="nav-item">
                            <i class="fas fa-home fa-2x"></i>
                            <span>Home</span>
                            </div>
                            </Link>
                            </li>
                        <li><Link to ="/Watchlist">
                            <div class="nav-item">
                            <i class="far fa-list-alt fa-2x"></i>
                            <span>Watchlist</span>
                            </div>
                            </Link>
                        </li>
                        <li><Link to ="/About">
                            <div class="nav-item">
                            <i class="fas fa-users fa-2x"></i>
                            <span>About</span>
                            </div>
                            </Link>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;