const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: { index: path.resolve(__dirname,'../src','index.js') },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'javascript/auto',
        use: [ 'file-loader' ],
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all', },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dallin\'s RSVP',
      template: path.resolve(__dirname, '../static', 'index.html'),
      favicon: path.resolve(__dirname, '../static', 'favicon.ico')
    })
  ]
}