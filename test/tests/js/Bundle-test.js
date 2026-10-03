import fs from 'fs'
import os from 'os'
import path from 'path'
import vm from 'vm'
import webpack from 'webpack'
import { expect } from 'chai'

import webpackConfig from './../../../webpack/webpack.config'

function build (outputPath) {
  const config = {
    ...webpackConfig,
    output: { ...webpackConfig.output, path: outputPath },
    optimization: { minimize: false }
  }

  return new Promise((resolve, reject) => {
    webpack(config, (error, stats) => {
      if (error) return reject(error)
      if (stats.hasErrors()) { return reject(new Error(stats.toString('errors-only'))) }
      resolve(path.join(outputPath, config.output.filename))
    })
  })
}

describe('dist bundle', function () {
  this.timeout(60000)

  it('can be imported without a DOM (SSR)', async function () {
    const outputPath = fs.mkdtempSync(path.join(os.tmpdir(), 'rjv-bundle-'))
    try {
      const file = await build(outputPath)
      const code = fs.readFileSync(file, 'utf8')
      const module = { exports: {} }
      // a fresh context has no `window` or `document`, like Node during SSR
      const context = vm.createContext({
        module,
        exports: module.exports,
        require
      })

      vm.runInContext(code, context, { filename: file })

      expect(module.exports.default).to.be.a('function')
    } finally {
      fs.rmSync(outputPath, { recursive: true, force: true })
    }
  })
})
