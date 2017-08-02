var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist',
    sourceMapFilename: "bundle.map"
  },
  devtool: '#source-map',
  module: {
    rules: [
      { 
        test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" 
      }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=/images/[name].[ext]' }
    ]
  }
};