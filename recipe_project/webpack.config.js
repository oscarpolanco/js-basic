const path = require('path');
const HtmlWebpackPuglin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  // mode: 'development'
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPuglin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};
