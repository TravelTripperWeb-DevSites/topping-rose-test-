const path    = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    'main.min.js': './_jssrc/app.js',
  },

  output: {
    path: path.resolve(__dirname, "_assets/js"),
    filename: '[name]',
    publicPath: "./_assets/js/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] 
          }
        }
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".json", ".jsx", ".css"]
  },

  plugins: [
  ]
};
