var config = require('config'),
    path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/App.jsx',
        vendor: [
            'history',
            'react',
            'react-dom',
            'react-router',
            'leaflet',
            'bootstrap',
            'd3',
            'react-chartist',
            'datamaps',
            'topojson',
        ]
    },
    output: {
        filename: './dist/scripts/[name].js'
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    target: 'web',

    // Loader options
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'dist/scripts/vendor.bundle.js', Infinity)

    ]



}
