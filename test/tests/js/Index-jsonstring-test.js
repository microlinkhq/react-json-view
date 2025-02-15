import React from 'react'
import { render  } from 'enzyme'
import { expect } from 'chai'
import { JSDOM } from 'jsdom'

import { ReactPureJsonView as Index} from './../../../src/js/index'

const { window } = new JSDOM()
global.window = window
global.document = window.document

describe('<Index src="<bigNumber json string>" />', function () {
  it('index can have ArrayGroup root component', function () {
    const wrapper = render(
      <Index
        name='test'
        groupArraysAfterLength={5}
        src={'[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]'}
      />
    )
    expect(wrapper.find('.array-group')).to.have.length(3)
  })

  it('length is correct even if an object has a length property', function () {
    const wrapper = render(
      <Index
        src={'{"first":"first property","second":"second property","length":1000}'}
      />
    )
    expect(wrapper.find('.object-size')).to.have.length(1)
  })

  it('bigint field is correct parsed with object\'s json string', function () {
    const wrapper = render(
      <Index
        src={'{"value":9223372036854775807,"v2":123}'}
      />
    )

    expect(wrapper.find('.object-size')).to.have.length(1)
  })

  it('bigint field is correct parsed with array\'s json string', function () {
    const wrapper = render(
      <Index
        src={'[9223372036854775807,0.0060254656709730629]'}
        />
    )

    expect(wrapper.find('.object-size')).to.have.length(1)
  })
})
