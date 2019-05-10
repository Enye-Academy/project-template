import express from 'express';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
import logger from 'morgan';
import path from 'path';
import colors from 'colors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import next from 'next';
import routes from './routes';
import devConfig from '../webpack.config.babel';
import configDB from './config/database';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;
const server = express(); // Set up the express app
dotenv.config();
mongoose.Promise = global.Promise;
let compiler;

// Setup a default catch-all route that sends back a welcome message in JSON format.
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(configDB.url_production, { useNewUrlParser: true });
} else if (process.env.NODE_ENV === 'test') {
    mongoose.connect(configDB.url_test, { useNewUrlParser: true });
    compiler = webpack(devConfig);
} else {
    mongoose.connect(configDB.url, { useNewUrlParser: true });
    compiler = webpack(devConfig);
}

// Log requests to the console.
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(expressValidator());
server.use(express.static(path.join(__dirname, './../public')));
server.use('/api-docs', express.static(path.join(__dirname, './../api-docs')));

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    server.use(webpackDevMiddleware(compiler, {
        open: false,
        publicPath: devConfig.output.publicPath,
    }));
    server.use(webpackHotMiddleware(compiler));
}

app.prepare().then(() => {
    app.use('/api/v1', routes);
    server.get('*', (req, res) => {
        handle(req, res);
        // res.sendFile(path.join(__dirname, '../client/index.html'));
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`); /* eslint no-console:0 */
    });
}).catch(ex => {
    console.error(ex); /* eslint no-console:0 */
    process.exit(1);
});
