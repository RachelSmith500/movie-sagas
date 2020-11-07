import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component{



    render(){
        return (
            <>
                {this.props.reduxState.movies.map((movie) => {
                        return <img src={movie.poster} />
                    })}
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieList);