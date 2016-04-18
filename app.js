'use strict';

import './main.css';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const App = React.createClass({
    get: function(key) {
        return this.state[key];
    },

    set: function(obj) {
        this.setState(obj);
    },

    getInitialState: function(){
        return {};
    },

    childContextTypes: {
        _GET_: React.PropTypes.func,
        _SET_: React.PropTypes.func,
        _LOCATION_: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            _GET_: this.get,
            _SET_: this.set,
            _LOCATION_: this.props.location
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
