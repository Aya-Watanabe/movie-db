import React, {useContext}from "react";
import {GlobalContext} from '../context/GlobalState';
import WatchlistMovie from "./WatchlistMovie";

export const Watchlist = () => {
  
    const {watchlist} = useContext(GlobalContext);
   
    return (
        <>
        <h1 className="fav-h1">My Watch List</h1>

        {watchlist.length > 0 ? (
        <div className="watchlist-movie-container">
            {watchlist.map((movie)=>(
               
                <WatchlistMovie key={movie.id} movie={movie} type="watchlist" />
            ))}
        </div>
            ) : (
                <div className="no-fev-movie">
                    <h2>Oops, NO movie in the list... let's add some!</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19.5 14c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-8.498 2h-7.502v-8h10v.032c1.872-1.203 4.113-1.319 6-.53v-11.502h-22v22h14.82c-.553-.576-1.006-1.251-1.318-2zm4.498-18h2v2h-2v-2zm0 4h2v2h-2v-2zm-12-4h10v8h-10v-8zm-2 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>      
                </div>       
        ) }
       
        </>
    )
}


export default Watchlist;