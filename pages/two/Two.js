'use strict';

import './Two.css';

import React from 'react'
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

const Two = React.createClass({
    render() {
        return <div className="page_two">
            <Header />
            <Navigation />
            <h3>Two</h3>
            <Footer />
        </div>
    }
})

module.exports = Two;