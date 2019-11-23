var webpackConfig = require('./webpack.config.js');


module.exports = function (config) {
  config.set({
    basePath: './src',
    frameworks: ['jasmine'],
    files: [
      'vendor.js',
      'fragments/*.js'
    ],
    preprocessors: {
      'vendor.js': ['webpack'],
      'test.js': ['webpack'],
      'fragments/*.js': ['webpack']
    },
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    singleRun: true
  });
};
