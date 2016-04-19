'use strict';

import React from 'react'

const Footer = React.createClass({

    contextTypes: {
        appState: React.PropTypes.func
    },

    render() {
        return <div>Footer {this.context.appState("a")}</div>
    }
})

module.exports = Footer;