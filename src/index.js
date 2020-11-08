import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES',getGenres);
    yield takeEvery('GET_DETAILS', getDetails);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

function* getMovies(){
    try{
        let response = yield axios.get('/api/movie')
        console.log(response.data);
        yield put ({type: 'SET_MOVIES', payload: response.data})
    }catch(error){
        console.log('error in get MOVIES', error);
    }
}

function* getGenres(){
    try{
        let response = yield axios.get('/api/genre')
        console.log(response.data);
        yield put ({type: 'SET_GENRES', payload: response.data})
    }catch(error){
        console.log('error in get GENRES', error);
    }
}

function* getDetails(action) {
    console.log(action.payload);
    try{
        let response = yield axios.get(`/api/movie/details/${action.payload}`)
        console.log(response.data);
        yield put({ type: 'SET_DETAILS', payload: response.data[0]})
    }catch(error){
        console.log('Error with getDetails saga', error);
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
