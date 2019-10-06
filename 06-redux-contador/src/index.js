import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contador from './components/Contador';

import * as serviceWorker from './serviceWorker';

// REDUX
import {Provider} from 'react-redux';
import  { createStore } from 'redux';
import ContadorReducer from './reducers/ContadorReducer'

var store = createStore(ContadorReducer);

ReactDOM.render(
    <Provider store={store}>
        <Contador />
    </Provider>, 
document.getElementById('root'));




serviceWorker.unregister();
