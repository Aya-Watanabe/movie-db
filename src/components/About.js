import React from 'react'

export const About = () => {
    return (
        <div className="about">
            
            <div class="overlay-text" id="overlay-text">
                <h1 class="overlay-text-big">
                About This Website
                </h1>
                <p>This is a Movie Database listing the movies based on popularity, rating, release date,now playing, or keywords. 
                    <br />Browse for your favourite film, add it to the Watch List, and save it for the Watch Later list.</p>
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src ={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg`} alt="Logo" style={{height:"30px"}} /></a>
            </div>
       </div>
    )
}

export default About;