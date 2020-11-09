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
    //defining state on page load
    componentDidMount = () => {
        this.getDetails();
        this.getGenres();
        this.setState({
            details: this.props.reduxState.details ? this.props.reduxState.details: [],
            genres: this.props.reduxState.genres ? this.props.reduxState.genres : []
        })
    }
    //getting details
    getDetails = () => {
        this.props.dispatch({type: 'GET_DETAILS', payload:this.props.match.params.id})
    }
    //getting genres 
    getGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'})
    }
    // setting genreIndex function 
    //using .indexOf method 
    getGenreIndex = (genres, genreTag) => {
        for(let genre of genres){
            if(genre.id === genreTag.genres_id){
                return genres.indexOf(genre);
            }
        }
    }
    //back button function send the user back to homepage 
    goBack = (event) => {
        this.props.history.push('/home')
    }
    //setting movies variable of movies
    render(){
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies: [];
       
            return (
                <>
                    {/*  */}
                    <p>{movies[this.props.match.params.id-1].description}</p>
                    {/* back button that runs the onClick function when clicked */}
                    <button onClick={this.goBack}>Back</button>
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