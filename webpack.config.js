const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV == 'production' ? false : true;

let config = {
    entry: path.join(__dirname,"src/index.js"),
    output: {
      path: path.join(__dirname,'dist'),
      filename: 'bunlde.[hash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'PDF.js-vue',
        filename: 'index.html',
        template: './default-index.ejs',
      })
    ]
}

if(isDev){
  config = merge(config,{
    devServer: {
      host: '0.0.0.0',
      port: '8068',
      open: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname,'./static'),
          to: 'static',
          ignore: ['.*']
        }
      ])
    ]
  })
}

module.exports = config