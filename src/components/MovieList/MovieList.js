import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component{

    //function for onClick
    //sending the user to the details page 
    //referencing the specific movie that was clicked 
    handleClick = (movie) =>{
        this.props.history.push(`/details/${movie}`);
    }
    //defining the movies variable 
    render(){
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];
        return (
            <>
            {/* mapping over the movies array, when movie poster is clicked show the description on the details page  */}
                {movies.map((movie) => {
                    return<><img src={movie.poster} onClick={() => this.handleClick(movie.id)}/>
                    <p>{movie.description}</p></>
                })}
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieList);