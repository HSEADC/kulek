const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
  '/index.html',
  '/about.html',
  '/search.html',
  '/acca.html',
  '/alfa.html',
  '/blogger.html',
  '/dictionary.html',
  '/fashion.html',
  '/fleamarket.html',
  '/games90.html',
  '/graffiti.html',
  '/guideline.html',
  '/health.html',
  '/internet.html',
  '/journal.html',
  '/leisureUSSR.html',
  '/model.html',
  '/rock.html',
  '/slang10.html',
  '/subculture.html',
  '/teaser.html',
  '/tens.html',
  '/tests.html',
  '/tv.html'
]

module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/javascript/main.js',
    guideline: './src/javascript/guideline.js',
    wordsMain: './src/javascript/wordsMain.js',
    choseTag: './src/javascript/choseTag.js',
    choseTag2: './src/javascript/choseTag2.js',
    choseTag3: './src/javascript/choseTag3.js',
    searchArticle: './src/javascript/searchArticle.js',
    testsList: './src/javascript/testsList.js',
    indexMain: './src/javascript/indexMain.jsx',
    testsSystem: './src/javascript/testsSystem.jsx',
    cardsSearchSort: './src/javascript/cardsSearchSort.jsx',
    dayWord: './src/components/A_Modal/A_Modal.jsx',
    searchCard: './src/components/M_cardSearch/M_cardSearch.jsx'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        },
        {
          from: path.resolve(__dirname, 'src/images/footer/'),
          to: path.resolve(__dirname, 'dev_build/images/footer/')
        },
        {
          from: path.resolve(__dirname, 'src/images/footer/'),
          to: path.resolve(__dirname, 'docs/images/footer/')
        },
        {
          from: path.resolve(__dirname, 'src/images/main/'),
          to: path.resolve(__dirname, 'dev_build/images/main/')
        },
        {
          from: path.resolve(__dirname, 'src/images/main/'),
          to: path.resolve(__dirname, 'docs/images/main/')
        },
        {
          from: path.resolve(__dirname, 'src/images/searchArt/'),
          to: path.resolve(__dirname, 'dev_build/images/searchArt/')
        },
        {
          from: path.resolve(__dirname, 'src/images/searchArt/'),
          to: path.resolve(__dirname, 'docs/images/searchArt/')
        }
      ]
    }),

    new SitemapPlugin({ base: 'https://mysite.com', paths }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'wordsMain', 'dayWord', 'indexMain']
    }),

    //Section
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html',
      chunks: ['index', 'main']
    }),
    new HtmlWebpackPlugin({
      template: './src/market.html',
      filename: './market.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/teaser.html',
      filename: './teaser.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/guideline.html',
      filename: './guideline.html',
      chunks: ['index', 'guideline']
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'searchCard', 'cardsSearchSort', 'choseTag3']
    }),

    // Article
    new HtmlWebpackPlugin({
      template: './src/market/fashion.html',
      filename: './market/fashion.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/market/media.html',
      filename: './market/media.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/market/things.html',
      filename: './market/things.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/fashion.html',
      filename: './fashion.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/acca.html',
      filename: './acca.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/slang10.html',
      filename: './slang10.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/games90.html',
      filename: './games90.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/journal.html',
      filename: './journal.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index', 'testsList', 'testsSystem', 'choseTag2']
    }),
    new HtmlWebpackPlugin({
      template: './src/fleamarket.html',
      filename: './fleamarket.html',
      chunks: ['index', 'choseTag', 'searchArticle']
    }),
    new HtmlWebpackPlugin({
      template: './src/subculture.html',
      filename: './subculture.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/rock.html',
      filename: './rock.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/tv.html',
      filename: './tv.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/internet.html',
      filename: './internet.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/leisureUSSR.html',
      filename: './leisureUSSR.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/blogger.html',
      filename: './blogger.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/tens.html',
      filename: './tens.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/health.html',
      filename: './health.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/model.html',
      filename: './model.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/alfa.html',
      filename: './alfa.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/graffiti.html',
      filename: './graffiti.html',
      chunks: ['index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
