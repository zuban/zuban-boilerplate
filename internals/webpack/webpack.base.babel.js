/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: options.babelQuery,
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
      }),
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[name]--[local]--[hash:base64:8]',
          },
        },
        'postcss-loader', // has separate config, see postcss.config.js nearby
      ],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
    },
    {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          query: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
          },
        },
      ],
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.(mp4|webm)$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
      }
        ,
    },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss() {
    //       return [
    //         require('postcss-cssnext')(),
    //       ];
    //     },
    //   },
    // }),


    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('styles.css'),
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },

  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
})
;
