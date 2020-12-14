import React, {createContext, useReducer, useEffect} from 'react';
import Reducer from "./Reducer";


//initial state
const initialState ={
    watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
//   watched: localStorage.getItem("watched")
//     ? JSON.parse(localStorage.getItem("watched"))
//     : [],
}
 
export const GlobalContext = createContext(initialState);

//Global Provider Components
export const GlobalProvider = (props) => {

const[state, dispatch] = useReducer(Reducer, initialState);

//Prevent browser refreshing watchlist using LOCAL STORAGE
useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    // localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);


//Action to add movie to watchlist
const addMovieToWatchlist = (movie) =>{
    dispatch({type:"ADD_MOVIE_TO_WATCHLIST", payload:movie});
}

const removeMovieFromWatchlist = (id) =>{
    dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload:id});
}

    return (
        <GlobalContext.Provider value={{
            watchlist:state.watchlist, 
            watched:state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}


