import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component{

    handleClick = () =>{
        console.log('handleClick function clicked')
        this.props.history.push('/details');
    }

    render(){
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];

        return (
            <>
                {movies.map((movie) => {
                    return<><img src={movie.poster} onClick={this.handleClick}/>
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