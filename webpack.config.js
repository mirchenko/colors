const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
  entry: {
    client: './src/client/index.js',
    styles: './scss/main.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: false,
    port: 8080,
    watchContentBase: true,
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader!postcss-loader',
        }),
      }
    ]
  },
  plugins: [
    extractCSS,
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }
};