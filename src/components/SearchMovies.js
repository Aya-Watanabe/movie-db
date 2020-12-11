import React, {useState,useEffect} from "react";
import Movie from './Movie';

 const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=96c32a4771978ce6e86038f43c145982&page=1&include_adult=false&query=`;

 const POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=96c32a4771978ce6e86038f43c145982`;
 const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=96c32a4771978ce6e86038f43c145982`;
 const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=96c32a4771978ce6e86038f43c145982`;
 const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=96c32a4771978ce6e86038f43c145982`;

 const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const SearchMovies = () => {

 const[movies, setMovies] = useState([]);
 const[searchTerm, setSearchTerm] = useState('');
 const[dropdown, setDropdown] = useState('');

    useEffect(() =>{
        fetch(POPULAR)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            setMovies(data.results);
        });
    }, []);


    const handleOnSubimt = (e) =>{
        e.preventDefault();

        if(searchTerm){
        fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            setMovies(data.results);
        });
        setSearchTerm("");
    }
    };

    const handleOnChange = (e) =>{
        setSearchTerm(e.target.value);
    };

    const handleDropdownChange = (e) =>{    
        setDropdown(e.target.value);
     
    }

const handleDropdownSubmit = (e) =>{
    e.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/movie/${dropdown}?api_key=96c32a4771978ce6e86038f43c145982`)
    .then((res) => res.json())
    .then((data) =>{
        // console.log(data);
        setMovies(data.results);
    });
    
    };
   
    return (
        <>
        <form onSubmit={handleOnSubimt}>
            <label className="label" htmlFor="search">Movie Name</label>
            <input className="search" type="search" value={searchTerm} onChange={handleOnChange} placeholder="i.e. Harry potter"  />
            {/* <button
             className="button" type="submit">Search</button> */}
        </form> 
        <form onSubmit={handleDropdownSubmit}>
            <select value={dropdown}  onChange={handleDropdownChange}>
             <option value= "popular">POPULAR</option>
             <option value="top_rated">TOP RATED</option>
             <option value="upcoming">UPCOMING</option>
             <option value="now_playing">NOW PLAYING</option>
            </select>
            <button className="button" type="submit">Search</button>
        </form> 

        <div className="movie-container">
            {movies.length > 0 && movies.map((movie) =>
                <Movie key={movie.id} {...movie} />
            )}

        </div>

        </>
    )
}

export default SearchMovies;