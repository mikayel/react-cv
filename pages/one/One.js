'use strict';

import './One.css';

import React from 'react'

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';


const One = React.createClass({

    contextTypes: {
        _GET_: React.PropTypes.func,
        _SET_: React.PropTypes.func
    },

    add: function() {
        var c = this.context._GET_("a") || 0;
        c++;
        this.context._SET_({"a": c});
    },

    render() {
        return <div className="page_one">
            <Header />
            <Navigation />
            <h3>One { this.context._GET_("a") }</h3><input type="button" onClick={this.add} value="add" />
            <Footer />
        </div>
    }
})

module.exports = One;