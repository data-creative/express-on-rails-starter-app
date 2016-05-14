var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('./public/'), // avoid "invalid argument" error by setting a value for this required variable
    filename: 'bundle.js',
    publicPath: path.resolve('/public/') // enables browser to access files in the "public" directory
    //filename: './public/bundle.js'
  },
  devServer: {
    contentBase: "./app/views",
    progress:true,
    colors:true,
    inline:true
  },
  //plugins: [
  //  new webpack.optimize.OccurenceOrderPlugin(),
  //  new webpack.HotModuleReplacementPlugin(),
  //  new webpack.NoErrorsPlugin()
  //],
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
