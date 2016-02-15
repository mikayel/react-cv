'use strict';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

const App = React.createClass({
    render() {
        console.log(this.props.children);
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/one">One</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

const About = React.createClass({
    render() {
        return <h3>About</h3>
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
            <Route path="one" component={require('react-router-proxy!./src/One')} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('appWraper'))