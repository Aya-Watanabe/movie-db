import React, {useContext}from "react";
import {GlobalContext} from '../context/GlobalState';
import WatchlistMovie from "./WatchlistMovie";



export const Watchlist = () => {
  
    const {watchlist} = useContext(GlobalContext);
   

    return (
        <>
        <h1 className="fav-h1">My Watch List</h1>

        {watchlist.length > 0 ? (
        <div className="movie-container">
            {watchlist.map((movie)=>(
               
                <WatchlistMovie key={movie.id} movie={movie} type="watchlist" />
            ))}
        </div>
            ) : (
                <div className="no-fev-movie">
                    <h2>No movie in the list... add some <i class="fas fa-video"></i></h2>
                   {/* <img src="https://www.nicepng.com/png/detail/50-505017_png-file-svg-movie-ticket-svg.png" alt="Png File Svg - Movie Ticket Svg@nicepng.com" /> */}
                   <img src="https://www.nicepng.com/png/detail/309-3099990_people-watching-a-movie-vector-people-watching-movie.png" alt="People watching movie image"></img>
                    
                </div>
                
        ) }
       
     </>
    )
}


export default Watchlist;