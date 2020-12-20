import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from './components/Header';
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';
import About from './components/About';
import Watchlist from './components/Watchlist';

import {GlobalProvider} from './context/GlobalState';


export const App = () => {
  return (
    <GlobalProvider>
    <Router>
        <div className="App">
         
          <div className="res-overlay">
            <span class="close-icon"><i class="fas fa-times fa-3x"></i></span>
            <ul>
              <li><Link to ="/">Home</Link></li>
              <li><Link to ="/Watchlist">Watchlist</Link></li>
              <li><Link to ="/About">About</Link></li>
            </ul>
          </div>
          <Header />
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