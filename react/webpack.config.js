

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './app/App.jsx'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },

    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.jsx$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
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
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        // custom reporter function
        reporter: function(errors) { }
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),

    ]



}