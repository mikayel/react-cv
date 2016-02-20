'use strict';

import React from 'react'

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

const NoMatch = React.createClass({
    render() {
        return <div>
            <Header />
            <Navigation />
            <h3>Page not found.</h3>
            <Footer />
        </div>
    }
})

module.exports = NoMatch;