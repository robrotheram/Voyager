var config = require('config'),
    path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.jsx',
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
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
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
            //{ test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                loader: 'path-file-loader',
                query:{
                    name: '[name].[ext]',
                    publicPath: './dist/fonts/',
                    cssPath: '../fonts/'
                }
            },
            { test: /\.(jpe?g|png|gif|svg)?$/,
                loader: 'path-file-loader',
                query:{
                    name: '[name].[hash].[ext]',
                    publicPath: './dist/images/',
                    cssPath: '../images/'
                }
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
        /*new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'dist/scripts/vendor.bundle.js', Infinity)
        */
    ]
}
