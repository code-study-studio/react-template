const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/index.js'
  },
  output: {
    filename: 'assets/scripts/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.s?css$/,
        //   chunks: 'all',
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   enforce: true,
        // },
      }
    }
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      //baseHref: 'http://example.com/awesome',
      //devServer: 'http://localhost:3001',
      // googleAnalytics: {
      //   trackingId: 'UA-XXXX-XX',
      //   pageViewOnLoad: true
      // },
      meta: [
        {
          name: 'description',
          content: 'A better default template for html-webpack-plugin.'
        }
      ],
      mobile: true,
      lang: 'en-US',
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ],
      //inlineManifestWebpackName: 'webpackManifest',
      //scripts: [
      // 'http://example.com/somescript.js',
      // {
      //   src: '/myModule.js',
      //   type: 'module'
      // }
      //],
      title: 'My App',
      window: {
        env: {
          apiHost: 'http://myapi.com/api/v1'
        }
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ?
        'assets/styles/[name].css' : 'assets/styles/[name].[hash].css',
      chunkFilename: devMode ?
        'assets/styles/[id].css' : 'assets/styles/[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      { enforce: "pre", test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../../',
              name: 'assets/images/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  }
};
