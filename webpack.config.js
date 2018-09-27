const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    main: ['./src/index.js'],
  },
  output: {
    path: path.resolve('./build/'),
    filename: 'gisida.js',
    libraryTarget: 'umd',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, './src'),
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [],
};

function readEnv(env) {
  if (env) {
    if (env.path) {
      config.output.path = path.resolve(env.path);
    }
    if (env.production === 'true') {
      config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
      config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    } else {
      config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }));
    }
  }
  return config;
}

module.exports = readEnv;
