const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:4].min.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          },
        },
        { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './assets/[name].[hash:4].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[id].css',
    }),
  ]
};

config.devServer = {
  // historyApiFallback: true,
  historyApiFallback: {
    index: '/',
  },
  contentBase: './dist',
  publicPath: '/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  },
  proxy: {
    '/api': {
      target: 'https://uat-uiaas.synapsefi.com',
      secure: false,
      changeOrigin: true,
      pathRewrite: { '^/login': '' }
    },
    '/v3': {
      target: 'https://uat-uiaas.synapsefi.com',
      secure: false,
      changeOrigin: true
    },
    '/v3.1': {
      target: 'https://uat-api.synapsefi.com',
      secure: false,
      changeOrigin: true
    },
    '/webhooks': {
      target: 'https://uat-uiaas.synapsefi.com',
      secure: false,
      changeOrigin: true
    },
    '/v1': {
      target: 'https://uat-uiaas.synapsefi.com',
      secure: false,
      changeOrigin: true
    },
  }
};


module.exports = config;
