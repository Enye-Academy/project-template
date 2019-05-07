/* eslint no-restricted-globals: 0 */
/* eslint indent: 0 */
/* eslint no-tabs: 0 */
/* eslint no-tabs: 0 */
/* eslint no-mixed-spaces-and-tabs: 0 */
const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const logger = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes');
const devConfig = require('../webpack.config.babel');

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
	mongoose.connect(configDB.url_production);
} else if (process.env.NODE_ENV === 'test') {
	mongoose.connect(configDB.url_test);
  	compiler = webpack(devConfig);
} else {
  	mongoose.connect(configDB.url);
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
	  open: false,
	  // publicPath: devConfig.output.publicPath,
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
