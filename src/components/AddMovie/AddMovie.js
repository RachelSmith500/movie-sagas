import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component{
    state = {
        newMovie:{
            id: 0,
            title: '',
            poster: '',
            description: ''
        }
    }

    handleChange = event => {
        console.log('new movie added')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                title: event.target.value,
                poster: event.target.value,
                description: event.target.description
            }
        });
    }

    render(){
        return (
            <>
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddMovies);