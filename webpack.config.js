const path = require('path');
const webpack = require('webpack');

function getEntrySources(sources) {
  return sources;
}

module.exports = {
  entry: {
    main: getEntrySources([
      './src/index.js',
    ]),
  },

  output: {
    path: path.resolve('dist/'),
    filename: 'gisida.js',
    libraryTarget: 'var',
    library: 'gisida',
  },

  devServer: {
    contentBase: 'dist',
  },

  devtool: '#inline-source-maps',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader', 'jsx-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff&name=./assets/fonts/[hash].[ext]',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=./assets/fonts/[hash].[ext]',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=./assets/fonts/[hash].[ext]',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=./assets/fonts/[hash].[ext]',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.csv$/,
        use: 'dsv-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
