import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component{
    //defining state 
    state = {
        newMovie:{
            title: '',
            poster: '',
            description: '',
            name: '',
        }
    }
    //on page load getGenres function
    componentDidMount = () => {
        this.getGenres();
    }
    //this updates state after values have been entered
    handleChange = (event, type) => {
        console.log('new movie added')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
              [type]:event.target.value,
            }
        });
    }
    //this adds a movie to the saga
    addNewMovie = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie})
        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                name: '',
            }
        });
    }
    // genre_id instead of name
    //getting our Genres
    getGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'})
    }
    //on click function will save the movie details when save button is clicked in the form
    saveMovie=(event) => {
        if(this.state.saveMovie === true){
        }else{
            this.props.dispatch ({type:'ADD_MOVIE', payload:this.state.newMovie})
            this.props.history.push('/home')
        }
    }
    // this is the cancel on click function 
    //when this is triggered the data will not enter in the form and the user will be sent to the home page 
    cancelMovie=(event) => {
        if(this.state.cancelMovie === true){
        }else{
            this.props.dispatch ({type:'CANCEL_MOVIE', payload:this.state.cancelMovie})
            this.props.history.push('/home')
        }
    }
    render(){
        return (
            <>
                <h3>List of Movies</h3>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <form onSubmit={this.addNewMovie}>
                    {/* title and poster inputs */}
                    <input type='text' placeholder='title' value={this.state.title}onChange={(event) => this.handleChange (event, 'title')}/>
                    <input type='text' placeholder='poster' value={this.state.poster}onChange={(event) => this.handleChange(event, 'poster')}/>
                    <label>
                        Description:
                        {/* collecting data from text area box  */}
                        <textarea value={this.state.description}onChange={(event) => this.handleChange(event, 'description')} />
                    </label>
                    {/* <input type='text' value={this.state.genre}onChange={this.handleChange}/> */}
                        <label>
                            Pick a Genre:
                            {/* select genre for new movie */}
                            <select value={this.state.value} onChange={(event) => this.handleChange(event, 'genre')}>
                                {console.log(this.props.reduxState.genres)}
                                {this.props.reduxState.genres.map((genre) => {
                                    return <option value={genre.id}>{genre.name}</option>
                                })}
                            </select>
                        </label>
                       {/* save movie button */}
                        <button onClick= {this.saveMovie}>Save</button>
                        {/* cancel movie function  */}
                        <button onClick={this.cancelMovie}>Cancel</button>
                  </form>
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddMovies);