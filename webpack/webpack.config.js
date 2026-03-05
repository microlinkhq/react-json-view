const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '..', 'src'),
  js: path.join(__dirname, '..', 'src', 'js'),
  style: path.join(__dirname, '..', 'src', 'style'),
  build: path.join(__dirname, '..', 'dist')
}

const config = {
  mode: 'production',
  entry: [PATHS.js + '/index.js'],
  externals: {
    cheerio: 'window',
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  },
  output: {
    path: PATHS.build,
    filename: 'main.js',
    library: 'reactJsonView',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [],
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
        include: [PATHS.js]
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
  },
  node: {
    global: false // Prevents webpack from breaking CSP, see https://github.com/microlinkhq/react-json-view/issues/76
  }
}

module.exports = config
