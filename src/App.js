import React from 'react';
import './style.css';

import SearchMovies from './components/SearchMovies.js';


export const App = () => {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies />
    </div>
  )
}

export default App;