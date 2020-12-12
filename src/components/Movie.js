import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const Movie = ({movie}) => {
  
   
    return (
        <div className="movie">
            
            <img src={IMG_API + movie.poster_path} alt={movie.title}/>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
              
            </div>
            <div className="movie-overlay">
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
                <button className="add-btn">Add<i class="far fa-heart"></i></button>
            </div>
            
        </div>
     
    )
}


export default Movie;