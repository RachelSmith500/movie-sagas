import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { generatePath } from 'react-router-dom';

class Details extends Component{
 //defining state 
    state ={
        details: this.props.details,
        genres: this.props.reduxState.genres
    }
    //on page load grabbing our data
    //getting the details and the genres
    //defining state on page load
    componentDidMount = () => {
        this.getDetails();
        this.getGenres();
      
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
        console.log('in getGenresIndex', genreTag, genres)
        for(let genre of genres){
            console.log(genre.id, genreTag.genre_id)
            if(genre.id === genreTag.genre_id){
                console.log(genres.indexOf.genre)
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
                    <img src={movies[this.props.match.params.id-1].poster}/>
                    {/* back button that runs the onClick function when clicked */}
                    <button onClick={this.goBack}>Back</button>
                        {console.log(this.props)}
                        {console.log(this.state)}
                    {this.props.reduxState.details.length > 0 ? 
                    this.props.reduxState.details.map((genreTag) => {
                        return<p>{this.props.reduxState.genres[this.getGenreIndex(this.props.reduxState.genres, genreTag)].name}</p>
                    }):'no genres'}
                   
                </>
            )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter (connect(mapStateToProps)(Details));