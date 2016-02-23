'use strict';

import './main.css';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

render((
    <Router history={browserHistory}>
        <Route path="/" component={require('react-router-proxy!./pages/one/One')} />
        <Route path="two" component={require('react-router-proxy!./pages/two/Two')} />
        <Route path="three" component={require('react-router-proxy!./pages/three/Three')} />
        <Route path="users" component={require('react-router-proxy!./pages/users/Users')}>
            <Route path="/user/:userId" component={require('react-router-proxy!./pages/users/user/User')}/>
        </Route>
        <Route path="*" component={require('react-router-proxy!./pages/NoMatch/NoMatch')}/>
    </Router>
), document.getElementById('appWraper'))
