'use strict';

import './Users.css';

import React from 'react'

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';


const Users = React.createClass({
    render() {
        return <div className="page_users">
            <Header />
            <Navigation />
            {this.props.children || "Users"}
            <Footer />
        </div>
    }
})

module.exports = Users;