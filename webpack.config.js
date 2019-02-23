var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
          {
            loader: 'linaria/loader',
            options: {
              // sourceMap: process.env.NODE_ENV !== 'production',
            },
          }
        ],
        
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
  plugins: [new HtmlWebpackPlugin({
    template: './static/index.html',
    inject: 'body',
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css',
  })]
};