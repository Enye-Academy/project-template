import webpack from 'webpack';
import path from 'path';

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, './client/js/app/index.js')
  ],

  module: {
    loaders: [
      { test: /\.(css|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(js|jsx)$/, include: path.join(__dirname, 'client'), loader: 'babel-loader', query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loaders: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        loaders: [
          'file-loader',
          'image-webpack-loader',
        ],
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'client')
  },

  output: {
    path: `${__dirname}/client/dist/`,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  node: {
    net: 'empty',
    dns: 'empty'
  }
};