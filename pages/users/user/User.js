'use strict';

import './User.css';

import React from 'react'

const User = React.createClass({
    render() {
        return <div className="sub_page_user">
            <h3>User: {this.props.params.userId}</h3>
        </div>
    }
})

module.exports = User;