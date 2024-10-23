const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '..', 'src'),
  js: path.join(__dirname, '..', 'src', 'js'),
  style: path.join(__dirname, '..', 'src', 'style'),
  build: path.join(__dirname, '..', 'demo', 'dist'),
  demo: path.join(__dirname, '..', 'demo')
}

const config = {
  mode: 'production',
  entry: [PATHS.demo + '/src/js/entry.js'],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    path: PATHS.demo + '/dist',
    filename: 'main.js',
    library: 'reactJsonView',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: [PATHS.js, PATHS.demo]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
}

module.exports = config
