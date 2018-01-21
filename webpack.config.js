const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: PATHS.source + '/js/index.js',
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};