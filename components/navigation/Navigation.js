'use strict';

import React from 'react'
import { Link } from 'react-router'

const Navigation = React.createClass({

    render() {
        return <div>
            <ul>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
                <li><Link to="/three">Three</Link></li>
            </ul>
        </div>
    }
})

module.exports = Navigation;