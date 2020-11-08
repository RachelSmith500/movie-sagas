import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { generatePath } from 'react-router-dom';

class Details extends Component{
 //defining state 
    state ={
        details: [],
        genres: []
    }
    //on page load grabbing our data
    //getting the details and the genres
    componentDidMount = () => {
        this.getDetails();
        this.getGenres();
        this.setState({
            details: this.props.reduxState.details ? this.props.reduxState.details: [],
            genre: this.props.reduxState.genres ? this.props.reduxState.genre : []
        })
    }
    //getting details
    getDetails = () => {
        this.props.dispatch({type: 'GET_DETAILS', payload:this.props.match.params.id})
    }
    //getting genres 
    getGenres = () => {
        this.props.dispatch({type: 'GET_GENRES'})
    }
    
    getGenreIndex = (genres, genreTag) => {
        for(let genre of genres){
            if(genre.id === genreTag.genres_id){
                return genres.indexOf(genre);
            }
        }
    }

    render(){
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies: [];
       
            return (
                <>
                    <p>{movies[this.props.match.params.id-1].description}</p>
                        {console.log(this.props)}
                    {this.state.details.map((genreTag) => {
                        return<p>{this.state.genres[this.getGenreIndex(this.state.genres, genreTag)].name}</p>
                    })}
                </>
            )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);