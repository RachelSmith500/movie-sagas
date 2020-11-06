import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import AddMovie from '../AddMovie/AddMovie'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path="/home" component={ListPage}/>
          <Route path="/details" component={Details} />
          <Route exact path="/addMovie" component={addMovie} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
