import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const Movie = ({title, poster_path, overview, vote_average, release_date}) => {
  
   
    return (
        <div className="movie">
            
            <img src={IMG_API + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <p>{release_date}</p>
                <p>{vote_average}</p>
              
            </div>
            <div className="movie-overlay">
                <h2>Overview:</h2>
                <p>{overview}</p>
                <button className="add-btn">Add<i class="far fa-heart"></i></button>
            </div>
            
        </div>
     
    )
}


export default Movie;