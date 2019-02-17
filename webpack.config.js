var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader?cacheDirectory",
        ],
      }],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
  plugins: [new HtmlWebpackPlugin({
    template: './static/index.html',
    inject: 'body',
  })]
};