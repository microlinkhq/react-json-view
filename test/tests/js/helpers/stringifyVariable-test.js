import React from 'react'
import { expect } from 'chai'

import stringifyVariable from './../../../../src/js/helpers/stringifyVariable'

describe('stringifyVariable', function () {
  it('stringifyVariable object', function () {
    const test = { a: true }
    expect(stringifyVariable(test)).to.equal(JSON.stringify(test, null, '  '))
  })

  it('stringifyVariable array', function () {
    const test = [1, 2, 3]
    expect(stringifyVariable(test)).to.equal(JSON.stringify(test, null, '  '))
  })

  it('stringifyVariable integers', function () {
    let test = 5
    expect(stringifyVariable(test)).to.equal('5')

    test = -15
    expect(stringifyVariable(test)).to.equal('-15')

    test = 0
    expect(stringifyVariable(test)).to.equal('0')
  })

  it('stringifyVariable floats', function () {
    let test = 1.123
    expect(stringifyVariable(test)).to.equal('1.123')

    test = -10.123
    expect(stringifyVariable(test)).to.equal('-10.123')
  })

  it('stringifyVariable booleans', function () {
    let test = true
    expect(stringifyVariable(test)).to.equal('true')

    test = false
    expect(stringifyVariable(test)).to.equal('false')
  })

  it('stringifyVariable NaN', function () {
    const test = NaN
    expect(stringifyVariable(test)).to.equal('NaN')
  })

  it('stringifyVariable null', function () {
    const test = null
    expect(stringifyVariable(test)).to.equal('null')
  })

  it('stringifyVariable undefined', function () {
    const test = undefined
    expect(stringifyVariable(test)).to.equal('undefined')
  })

  it('stringifyVariable strings', function () {
    let test = 'test string'
    expect(stringifyVariable(test)).to.equal('test string')

    test = ''
    expect(stringifyVariable(test)).to.equal('')
  })

  it('stringifyVariable functions', function () {
    function test (e) {}
    expect(stringifyVariable(test)).to.equal('function test(e) {}')

    const testArrow = e => {}
    expect(stringifyVariable(testArrow)).to.equal('e => {}')
  })

  it('stringifyVariable date', function () {
    const test = new Date()
    expect(stringifyVariable(test)).to.equal(test.toString())
  })

  it('stringifyVariable regex', function () {
    const regex = /[0-9]/gi
    expect(stringifyVariable(regex)).to.equal(regex.toString())
  })
})
