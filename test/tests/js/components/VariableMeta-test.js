import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import VariableMeta from './../../../../src/js/components/VariableMeta'

describe('<VariableMeta />', function () {
  const rjvId = 1

  it('VariableMeta clipboard should not exist', function () {
    const wrapper = shallow(
      <VariableMeta
        src={{ test: true }}
        size={1}
        theme='rjv-default'
        enableClipboard={false}
        onAdd={false}
        onDelete={false}
        rjvId={rjvId}
      />
    )
    expect(wrapper.find('.copy-to-clipboard-container')).to.have.length(0)
  })

  it('VariableMeta size should exist', function () {
    const wrapper = shallow(
      <VariableMeta
        src={{ test: true }}
        size={1}
        theme='rjv-default'
        displayObjectSize
        onAdd={false}
        onDelete={false}
        rjvId={rjvId}
      />
    )
    expect(wrapper.find('.object-size')).to.have.length(1)
  })

  it('VariableMeta size should not exist', function () {
    const wrapper = shallow(
      <VariableMeta
        src={{ test: true }}
        size={1}
        theme='rjv-default'
        displayObjectSize={false}
        onAdd={false}
        onDelete={false}
        rjvId={rjvId}
      />
    )
    expect(wrapper.find('.object-size')).to.have.length(0)
  })

  it('VariableMeta clipboard click with copy callback', function () {
    const inputSrc = { test: true }
    let callbackCounter = 0
    const wrapper = mount(
      <VariableMeta
        src={inputSrc}
        size={1}
        theme='rjv-default'
        namespace={['test']}
        enableClipboard={copy => {
          expect(copy.src.test).to.equal(inputSrc.test)
          // increment counter to assert that callback was called
          callbackCounter++
        }}
        onAdd={false}
        onDelete={false}
        rjvId={rjvId}
      />
    )
    expect(wrapper.find('.copy-to-clipboard-container')).to.have.length(1)
    expect(wrapper.find('.copy-icon')).to.have.length(2)

    document.execCommand = mock => {}
    wrapper.find('.copy-icon').first().simulate('click')
    // verify that callback was called
    expect(callbackCounter).to.equal(1)
  })

  it('VariableMeta clipboard click without copy callback', function () {
    const wrapper = mount(
      <VariableMeta
        src={{ test: true }}
        size={1}
        theme='rjv-default'
        enableClipboard
        onAdd={false}
        onDelete={false}
        rjvId={rjvId}
      />
    )
    expect(wrapper.find('.copy-to-clipboard-container')).to.have.length(1)
    expect(wrapper.find('.copy-icon')).to.have.length(2)
  })
})
