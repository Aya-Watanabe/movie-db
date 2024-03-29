import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
          <Switch>
            <Route path="/" exact><SearchMovies /></Route>
            <Route path="/Watchlist"><Watchlist /></Route>
            <Route path="/About"><About /></Route>
            {/* <Route><PageNotFound /></Route> */}
          </Switch>
        </div>
      </Router>
      </GlobalProvider>
  )
}

export default App;