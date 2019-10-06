import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './components/ToDo/ToDo';
import Home from './components/Home/Home';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import  { createStore } from 'redux';
import ToDoReducer from './reducers/ToDoReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

var store = createStore(ToDoReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={ToDo} />
        </Router>
    </Provider>    
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
