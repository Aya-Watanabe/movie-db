import React from 'react';
import './style.css';
import Header from './components/Header';
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';
import About from './components/About';
import MyFavorite from './components/MyFavorite';


export const App = () => {
  return (
    <>
    <Header />
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies />
    </div>
    <MyFavorite />
    <About />
    <Footer />
    </>
  )
}

export default App;