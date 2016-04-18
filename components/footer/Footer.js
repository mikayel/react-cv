'use strict';

import React from 'react'

const Footer = React.createClass({

    contextTypes: {
        _GET_: React.PropTypes.func,
        _LOCATION_: React.PropTypes.object
    },

    render() {
        return <div>Footer {this.context._GET_("a")}</div>
    }
})

module.exports = Footer;