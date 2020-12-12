import React from "react";
import {NavLink} from "react-router-dom";


export const Footer = () => {
  
   
    return (
       
    <footer> 
        <div class="tmdb-logo">
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src ={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg`} alt="Logo" style={{height:"30px"}} /></a>
        </div>
        <div class="">
        This is footer
        </div>
    </footer> 
        
    )
}


export default Footer;