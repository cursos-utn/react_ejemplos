import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';

import  { createStore } from 'redux';
import PruebaReducer from './reducers/PruebaReducer';

var store = createStore(PruebaReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/1" component={Pagina1} />
            <Route path="/2" component={Pagina2} />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
