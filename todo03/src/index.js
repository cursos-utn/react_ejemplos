import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ToDo from './components/ToDo/ToDo';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoReducer from './store/todoReducer';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Register from './components/Register/Register';
import dotenv from 'dotenv';
// Contiene REACT_APP_SERVER que apunta al server (archivo .env)
dotenv.config();



const store = createStore(todoReducer);

function checkAuth() {
    var token = store.getState().token;
    if (token) {
        return <ToDo />
    } else {
        return <Redirect to="/login" />
    }
}


//  const logeado = store.getState().token ? true:false;

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route exact path="/" render={checkAuth} />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
    </Router>
</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


