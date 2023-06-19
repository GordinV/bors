'use strict';

const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');
import {createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Doc = require('../frontend/modules/main.jsx');
//import store from './store';

// сохраним базовые данные в памети


ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Doc store = {store}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('doc')
);

