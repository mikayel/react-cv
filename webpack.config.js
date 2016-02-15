var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./app.js']
    },
    output: {
        path: __dirname + '/__build__',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.gif/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};