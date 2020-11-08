import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { generatePath } from 'react-router-dom';

class Details extends Component{

    
    // props.history.push('/home')
    
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