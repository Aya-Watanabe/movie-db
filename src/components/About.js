import React from 'react'

export const About = () => {
    return (
        <>
        <h1 className="about-h1">About Movie DB</h1>
        <div className="movie-container">
           <p>Movie DB is a Movie Database listing the movies based on popularity, rating, release date,now playing, or keywords. Browse for your favourite film, add it to the Watch List, and save it for the Watch Later list.</p>
           <div>
           <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
           <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src ={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg`} alt="Logo" style={{height:"30px"}} /></a>
           </div>
        </div>
       </>
    )
}

export default About;