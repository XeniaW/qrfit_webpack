const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules'] 
  },
  optimization: {
    usedExports: true
  },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        open: true,
        port: 3000,
        historyApiFallback: true,
       
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'ts-loader',
                  options: {
                    // disable type checker
                    transpileOnly: true
                  }
                }
              },
              { test: /.html$/, loader: "html-loader", },
             
              {
                test: /\.(scss|css)$/,
                use: [
                  process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  'postcss-loader',
                ],
                
              }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
      },
    
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].css'
        }),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js'],
            exclude: 'node_modules',
            context: 'src'
         }),
         new HtmlWebpackPlugin({ template: "src/index.html", }),
     ]
};