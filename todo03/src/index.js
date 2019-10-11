import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import toDoReducer from './store/todoReducer';
import ToDo from './components/ToDo/ToDo';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import todoReducer from './store/todoReducer';
import thunk from 'redux-thunk';

const store = createStore(todoReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
