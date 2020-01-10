// Variables
const webpack = require('webpack')
const path = require('path')
const AutoPrefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const IS_DEV = process.env.NODE_ENV === 'dev'
const PATH = {
  scss: path.join(__dirname, './src/scss'),
  js: path.join(__dirname, './src/js'),
  dist: path.join(__dirname, './'),
}

// Webpack
module.exports = () => {
  return {
    // Entry
    entry: {
      script: `${PATH.js}/script.js`,
    },

    // Resolve
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js',
      },
    },

    // Output
    output: {
      path: PATH.dist,
      filename: 'www/asset/js/[name].js',
    },

    // Optimization
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },

    // Module
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // 拡張子.css or .scssの場合
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: IS_DEV,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  AutoPrefixer({
                    overrideBrowserslist: ['last 4 versions'],
                    grid: 'autoplace',
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
          ],
        },
      ],
    },

    // Plugins
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'www/asset/css/style.css',
      }),
    ],
  }
}
