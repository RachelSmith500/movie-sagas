import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component{

    state = {
        newMovie:{
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }

    componentDidMount = () => {
        this.getGenres();
    }

    handleChange = event => {
        console.log('new movie added')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                title: event.target.value,
                poster: event.target.value,
                description: event.target.value,
                genre_id: event.target.value
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
                genre_id: ''
            }
        });
    }

    getGenres = () => {
        this.props.dispatch({type: 'GET_GENRES'})
    }

    save=(event) => {
        if(this.state.save ===true){
        }else{
            this.props.dispatch ({type:'ADD_MOVIE', payload:this.state.newMovie})
            this.props.history.push('/home')
        }
    }

    cancel=(event) => {
        if(this.state.cancelMovie === true){
        }else{
            // this.props.dispatch ({type:'CANCEL_MOVIE', payload:this.state.newMovie})
            this.props.history.push('/home')
        }
    }
    render(){
        return (
            <>
                <h3>List of Movies</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewMovie}>
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
                                {console.log(this.props.reduxState.genres)}
                                {this.props.reduxState.genres.map((genre) => {
                                    return <option value="name">{genre.name}</option>
                                })}
                            </select>
                        </label>
                        {/* <button type="submit">Submit</button> */}
                        <button onClick= {this.save}>Save</button>
                        <button onClick={this.cancel}>Cancel</button>
                  </form>
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddMovies);