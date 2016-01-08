'use strict';

module.exports = {
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['babel'],
      test: /\.js$/,
    }],
  },
  output: {
    library: 'BotifySDK',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['lib', 'node_modules'],
  },
};
