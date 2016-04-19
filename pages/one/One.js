'use strict';

import './One.css';

import React from 'react'

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';


const One = React.createClass({

    contextTypes: {
        appState: React.PropTypes.func
    },

    add: function() {
        var c = this.context.appState("a") || 0;
        c++;
        this.context.appState({"a": c});
    },

    render() {
        return <div className="page_one">
            <Header />
            <Navigation />
            <h3>One { this.context.appState("a") }</h3><input type="button" onClick={this.add} value="add" />
            <Footer />
        </div>
    }
})

module.exports = One;