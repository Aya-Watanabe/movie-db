import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import NavOverlay from './components/NavOverlay';
import Header from './components/Header';
import SearchMovies from './components/SearchMovies';
import About from './components/About';
import Watchlist from './components/Watchlist';

import {GlobalProvider} from './context/GlobalState';


export const App = () => {
  return (
    <GlobalProvider>
    <Router basename={'/movie-db'}>
        <div className="App">
         <Header />
          {/* {window.outerWidth > 1200 ? <Header /> : <NavOverlay />} */}
          <Switch>
            <Route path="/" exact><SearchMovies /></Route>
            <Route path="/Watchlist"><Watchlist /></Route>
            <Route path="/About"><About /></Route>
            {/* <Route><PageNotFound /></Route> */}
            
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
      </GlobalProvider>
  )
}

export default App;