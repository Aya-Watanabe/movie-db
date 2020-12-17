import React from 'react'

export const About = () => {
    return (
        <div className="about">
            
            <div className="overlay-text" id="overlay-text">
                <h1 className="overlay-text-big">
                About This Website
                </h1>
                <div className="about-container">
                    <img className="tmdb-logo" src ={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`} alt="Logo" style={{height:"180px"}} />
                    <p className="overlay-text-small">This is a Movie Database listing the movies based on popularity, rating, release date,now playing, or keywords. 
                    <br />Browse for your favourite film, add it to the Watch List, and save it for the Watch Later list.
                    <br />
                    <br />
                    This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
            </div>
       </div>
    )
}

export default About;