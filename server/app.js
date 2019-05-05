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
import routes from './routes';
import devConfig from '../webpack.config.babel';

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 8000;

// database config
const configDB = require('./config/database');

// Set up the express app
const app = express();


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
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(express.static(__dirname + './../public'));
app.use('/api-docs', express.static(path.join(__dirname, './../api-docs')));

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: devConfig.output.publicPath,
    open: false
  }));
  app.use(webpackHotMiddleware(compiler));
}
app.use('/api/v1', routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err, 'but stuff works'); //eslint-disable-line
  } else {
    console.log(`We are live on port ${port}...`.green); //eslint-disable-line
  }
});

module.exports = app;
