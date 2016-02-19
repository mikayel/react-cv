'use strict';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const App = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})

const Home = React.createClass({
    render() {
        return <h3>Home</h3>
    }
})

const Inbox = React.createClass({
    render() {

        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

const NoMatch = React.createClass({
    render() {
        return <h3>NoMatch</h3>
    }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="one" component={require('react-router-proxy!./pages/one/One')} />
            <Route path="two" component={require('react-router-proxy!./pages/two/Two')} />
            <Route path="three" component={require('react-router-proxy!./pages/three/Three')} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
            <Route path="*" component={require('react-router-proxy!./pages/NoMatch/NoMatch')}/>
        </Route>
    </Router>
), document.getElementById('appWraper'))