import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component{
    state = {
        newMovie:{
            title: '',
            poster: '',
            description: ''
        }
    }

    handleChange = event => {
        console.log('new movie added')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                title: event.target.value,
                poster: event.target.value,
                description: event.target.value,
                genre: event.target.value
            }
        });
    }
    addNewMovie = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie})
        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                genre: ''
            }
        });
    }
    render(){
        return (
            <>
                <h3>List of Movies</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewMovie}/>
                    <input type='text' placeholder='title' value={this.state.title}onChange={this.handleChange}/>
                    <input type='text' placeholder='poster' value={this.state.poster}onChange={this.handleChange}/>
                    <label>
                        Description:
                        <textarea value={this.state.description}onChange={this.handleChange} />
                    </label>
                    {/* <input type='text' value={this.state.genre}onChange={this.handleChange}/> */}
                        <label>
                            Pick a Genre:
                            <select value={this.state.genre} onChange={this.handleChange}>
                                <option value="Adventure">Adventure</option>
                                <option value="Animated">Animated</option>
                                <option value="Biographical">Biographical</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Disaster">Disaster</option>
                                <option value="Drama">Drama</option>
                                <option value="Epic">Epic</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Musical">Musical</option>
                                <option value="Romantic">Romantic</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Space-Opera">Space-Opera</option>
                                <option value="Superhero">Superhero</option>
                            </select>
                        </label>
                        <button type="submit">onSubmit</button>
                   
                    
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddMovies);