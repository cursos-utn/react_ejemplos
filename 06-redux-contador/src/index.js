import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contador from './components/Contador';
import * as serviceWorker from './serviceWorker';

// REDUX
import  { createStore } from 'redux';
import ContadorReducer from './reducers/ContadorReducer'

var store = createStore(ContadorReducer);

const render = () => ReactDOM.render(
<Contador 
    value={store.getState()}
    onIncrementar={ () => store.dispatch({type: 'INCREMENTAR'})}
    onDecrementar={ () => store.dispatch({type: 'DECREMENTAR'})}

/>, 
document.getElementById('root'));

render()
store.subscribe(render)


serviceWorker.unregister();
