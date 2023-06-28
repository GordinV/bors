'use strict';

import DocContext from "./doc-context";

const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Doc = require('../frontend/modules/main.jsx');

// если пользователь залогинился в другом модуле, берем его данные
if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'));
    let today = new Date();
    let loadedDate = user.loadedDate ? new Date(user.loadedDate): null;


    if (!loadedDate || loadedDate.getDate() !== today.getDate()) {
        // устаредо, удаляем
        delete localStorage.user;
    } else {
        store.dispatch({type: 'user', user: user});
    }

}

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Doc store={store}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('doc')
);

