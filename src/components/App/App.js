import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import AddMovie from '../AddMovie/AddMovie'

class App extends Component {
  // Renders the entire app on the DOM
     componentDidMount = () => {
        this.getMovies();
        this.getGenres();
    }
    //getting movies on page load
    getMovies = () => {
        this.props.dispatch({type: 'GET_MOVIES'})
    }
    getGenres = () => {
      this.props.dispatch({type: 'FETCH_GENRES'})
      // this.setState({
      //     details: this.props.reduxState.details,
      //     genres: this.props.reduxState.genres
      // })
  }

  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* routes defined */}
          <Route exact path="/home" component={MovieList}/>
          <Route path="/details/:id"><Details details={this.props.reduxState.details}></Details></Route>
          <Route path="/addMovie" component={AddMovie} />
        </Router>
       
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
