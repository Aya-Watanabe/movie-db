import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const Movie = ({movie}) => {
  
    //so that valiables from GlobalState.js can be used here...
    const {addMovieToWatchlist, watchlist}= useContext(GlobalContext);

    //prevent same movie added twice
    let storedMovie = watchlist.find(o => o.id===movie.id);

    //disable button after added once
    const watchlistDisabled = storedMovie ? true : false;
   
    return (
        <div className="movie">
            {
            movie.poster_path == null ? <img src ={`https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`} alt="no poster" style={{height:"76%"}} /> : 
            <img src={IMG_API + movie.poster_path} alt={movie.title}/>
            }           
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
                <p><i class="fas fa-star"></i>{movie.vote_average}</p>
              
            </div>
            <div className="movie-overlay">
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
                <button className="add-btn" 
                        disabled={watchlistDisabled}
                        onClick ={() => addMovieToWatchlist(movie)}>
                    Add<i class="fas fa-heart"></i>
                </button>
            </div>
            
        </div>
     
    )
}

export default Movie;