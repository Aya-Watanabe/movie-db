import React, {useContext}from "react";
import {GlobalContext} from '../context/GlobalState';
import WatchlistMovie from "./WatchlistMovie";


export const Watchlist = () => {
  
    const {watchlist} = useContext(GlobalContext);
   
    return (
        <>
        <h1>My Watch List</h1>

        {watchlist.length > 0 ? (
        <div className="movie-container">
            {watchlist.map((movie)=>(
               
                <WatchlistMovie movie={movie} type="watchlist" />
            ))}
        </div>
            ) : (
                <div>
                    <img src="/../images/film_large.png"/>
                    <h2>No movie in the list</h2>
                </div>
                
        ) }
       
     </>
    )
}


export default Watchlist;