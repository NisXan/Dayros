const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + '/build',    
    filename: 'js/build.js'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff(2)?)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
	  {
	    test: /\.ico$/,
	    loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
    port: 3000,
  },

  plugins: [    
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
	    favicon: __dirname + '/public/favicon.ico',
      inject: 'head',
      scriptLoading: 'defer'      
    })
  ],
};