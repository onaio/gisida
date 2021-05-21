const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  target: "node",
  entry: {
    main: ['./src/index.js'],
  },
  output: {
    path: path.resolve('./build/'),
    filename: 'gisida.js',
    // libraryTarget: 'umd',
    libraryTarget: 'commonjs2',
  },
  devtool: 'cheap-module-source-map',
  externals: {
		canvas: "commonjs canvas"
	},
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, './src'),
      },
    ],
  },
  node: {
    fs: 'empty'
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
      config.devtool = 'source-map';
      process.env.NODE_ENV = 'production';
      config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
      config.plugins.push(new UglifyJsPlugin());
      config.plugins.push(new webpack.HashedModuleIdsPlugin());
      config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
      process.env.NODE_ENV = 'production';
    } else {
      config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }));
      process.env.NODE_ENV = 'development';
    }
  }
  return config;
}

module.exports = readEnv;
