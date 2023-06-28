'use strict';

const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');
import DocContext from './doc-context.js';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Doc = require('../frontend/modules/raama.jsx');

initData = JSON.parse(initData);
userData = JSON.parse(userData);

// сохраним базовые данные в памети

DocContext.initData = initData;
DocContext.userData = userData;
DocContext.module = 'raama';
DocContext.pageName = 'Raamatupidamine';
DocContext.gridConfig = initData.docConfig;
DocContext.menu = initData.menu ? initData.menu.data : [];
DocContext.keel = 'EST';

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
        DocContext.userData = Object.assign({}, DocContext.userData, user)
    }
}

ReactDOM.hydrate(
    <BrowserRouter>
        <Doc initData={initData}
             userData={DocContext.userData}
             store={store}/>
    </BrowserRouter>
    , document.getElementById('doc')
);

