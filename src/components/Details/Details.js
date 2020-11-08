import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { generatePath } from 'react-router-dom';

class Details extends Component{

    state ={
        details: [],
        genres: []
    }
    
    componentDidMount = () => {
        this.getDetails();
        this.getGenres();
        this.setState({
            details: this.props.reduxState.details ? this.props.reduxState.details: [],
            genre: this.props.reduxState.genres ? this.props.reduxState.genre : []
        })
    }

    getDetails = () => {
        this.props.dispatch({type: 'GET_DETAILS', payload:this.props.match.params.id})
    }
    getGenres = () => {
        this.props.dispatch({type: 'GET_GENRES'})
    }
    
    getGenreIndex = () => {
        for(let genre of genres){
            if(genre.id === genreTag.genres_id){
                return genres,indexOf(genre);
            }
        }
    }
    
    render(){
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies: [];
       
            return (
                <>
                    {movies.map((movie) => {
                        return <p>{movie.description}</p>
                    })}
                </>
            )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);