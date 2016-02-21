'use strict';

import './One.css';

import React from 'react'

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';


const One = React.createClass({
    render() {
        return <div className="page_one">
            <Header />
            <Navigation />
            <h3>One</h3>
            <Footer />
        </div>
    }
})

module.exports = One;