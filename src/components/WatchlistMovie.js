import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const WatchlistMovie = ({movie,type}) => {
  
    const {removeMovieFromWatchlist}= useContext(GlobalContext);
   
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
                <button className="remove-btn" 
                        onClick ={() => removeMovieFromWatchlist(movie.id)}
                        >
                    Remove<i class="fas fa-heart-broken"></i>
                </button>
            </div>
            
        </div>
     
    )
}

export default WatchlistMovie;