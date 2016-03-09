var path = require("path");

module.exports = {
  entry: [
    'babel-polyfill',
    './app/App.js'
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public/'
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          include: [
              path.join(__dirname, 'app')
          ],
          loader: 'babel',
          query: {
              presets: [
                  require.resolve('babel-preset-es2015'),
                  require.resolve('babel-preset-react'),
                  require.resolve('babel-preset-stage-0')
              ]
          }
        }
    ]
  }
};
