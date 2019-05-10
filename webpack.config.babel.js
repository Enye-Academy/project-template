/* eslint-disable sort-keys */
import webpack from 'webpack';
import path from 'path';

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: debug ? 'inline-sourcemap' : false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './client/js/app/index.js'),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'client'),
    },

    output: {
        path: `${__dirname}/client/dist/`,
        filename: 'bundle.js',
        publicPath: '/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },

    node: {
        net: 'empty',
        dns: 'empty',
    },
};
