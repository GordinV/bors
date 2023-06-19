'use strict';

const React = require('react');
const PropTypes = require('prop-types');

const MainRegister = require('./../docs/main/index.jsx');
const MainDoc = require('./../docs/main/document/index.jsx');


const {Route} = require('react-router-dom');
//const createHashHistory = requery('history/lib/createHashHistory')
const {StyleRoot} = require('radium');
const MODULE = 'main';

//const store = require ('./../store');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false
        };
    }

    render() {
        let store = this.props.store;
        console.log('props', this.props)
        return (
            <StyleRoot>
                <Route exact path="/main"
                       render={(props) =>
                           <MainRegister
                               store={store}
                               history={props.history}
                               module={MODULE}/>}
                />
                <Route exact path="/main/:docId"
                       render={(props) => <MainDoc {...props}
                                                   history={props.history}
                                                   store={store}
                       />}
                />
                <Route exact path="/"
                       render={(props) =>
                           <MainRegister
                               store={store}
                               history={props.history}
                               module={MODULE}/>}/>

            </StyleRoot>)
    }

}

module.exports = App;