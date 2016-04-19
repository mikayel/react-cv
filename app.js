'use strict';

import './main.css';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const App = React.createClass({
    getInitialState: function(){
        return {};
    },

    appState: function(obj) {
        if (typeof obj == "string") {
            return this.state[obj];
        }
        this.setState(obj);
    },

    childContextTypes: {
        appState: React.PropTypes.func
    },

    getChildContext: function() {
        return {
            appState: this.appState
        };
    },

    render() {
        return <div>{this.props.children}</div>
    }
});


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={require('react-router-proxy!./pages/one/One')} />
            <Route path="two" component={require('react-router-proxy!./pages/two/Two')} />
            <Route path="three" component={require('react-router-proxy!./pages/three/Three')} />
            <Route path="users" component={require('react-router-proxy!./pages/users/Users')}>
                <Route path="/user/:userId" component={require('react-router-proxy!./pages/users/user/User')}/>
            </Route>
            <Route path="*" component={require('react-router-proxy!./pages/NoMatch/NoMatch')}/>
        </Route>
    </Router>
), document.getElementById('appWraper'))
