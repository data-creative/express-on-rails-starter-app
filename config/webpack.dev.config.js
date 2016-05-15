var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server', // enable hot middleware in development
    'webpack-hot-middleware/client', // enable hot middleware in development.
    './app/index.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: path.resolve('/public/') // enables browser to access files in the "public" directory
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ], // enable hot middleware in development
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
};
