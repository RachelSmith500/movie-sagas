import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component{

    componentDidMount = () => {
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({type: 'GET_MOVIES'})
    }

    render(){
        return (
            <>
                {this.props.reduxStore.randomGifsList.map((gif)=> {
                        return <img src={gif.images.original.url} />
                    })}
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieList);