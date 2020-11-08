import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component{

    state = {
        newMovie:{
            title: '',
            poster: '',
            description: '',
            name: '',
        }
    }

    componentDidMount = () => {
        this.getGenres();
    }

    handleChange = (event, type) => {
        console.log('new movie added')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
              [type]:event.target.value,
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
                name: '',
            }
        });
    }

    getGenres = () => {
        this.props.dispatch({type: 'GET_GENRES'})
    }

    save=(event) => {
        if(this.state.save === true){
        }else{
            this.props.dispatch ({type:'ADD_MOVIE', payload:this.state.newMovie})
            this.props.history.push('/home')
        }
    }

    cancel=(event) => {
        if(this.state.cancelMovie === true){
        }else{
            this.props.dispatch ({type:'CANCEL_MOVIE', payload:this.state.cancel})
            this.props.history.push('/home')
        }
    }
    render(){
        return (
            <>
                <h3>List of Movies</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewMovie}>
                    <input type='text' placeholder='title' value={this.state.title}onChange={(event) => this.handleChange (event, 'title')}/>
                    <input type='text' placeholder='poster' value={this.state.poster}onChange={(event) => this.handleChange(event, 'poster')}/>
                    <label>
                        Description:
                        <textarea value={this.state.description}onChange={(event) => this.handleChange(event, 'description')} />
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