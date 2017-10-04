const path = require('path');
const webpack = require('webpack');


const config = {

  entry: {
    main: ['./src/index.js']
  },

  output: {
    path: path.resolve('./dist/'),
    filename: 'gisida.js',
    libraryTarget: 'commonjs'
  },

  devServer: {
    contentBase: 'dist',
  },

  devtool: '#inline-source-maps',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['jsx-loader', 'babel-loader'],
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
};

module.exports = function (env) {
  if (env) {
    if (env.path) {
      config.output.path = path.resolve(env.path);
    }
    if (env.uglify === 'true') {
      config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
  }
  return config;
};
