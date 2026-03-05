import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import ObjectKeyModal from './../../../../../src/js/components/ObjectKeyModal/ObjectKeyModal'

const rjvId = 1

describe('<ObjectKeyModal />', function () {
  it('ObjectKeyModal input change', function () {
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={() => {
          return true
        }}
        submit={() => {
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )

    expect(wrapper.find('.key-modal-input').length).to.equal(1)
    expect(wrapper.find('.key-modal-input').props().value).to.equal('test')
    wrapper
      .find('.key-modal-input')
      .simulate('change', { target: { value: 'tests' } })
    expect(wrapper.state('input')).to.equal('tests')
    expect(wrapper.find('.key-modal-input').props().value).to.equal('tests')
  })

  it('ObjectKeyModal invalid input', function () {
    let validCounter = 0
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={input => {
          validCounter++
          return input !== 'invalid'
        }}
        submit={() => {
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )

    expect(wrapper.find('.key-modal-submit').length).to.equal(2)
    expect(wrapper.find('.key-modal-input').props().value).to.equal('test')
    wrapper
      .find('.key-modal-input')
      .simulate('change', { target: { value: 'invalid' } })
    expect(wrapper.state('input')).to.equal('invalid')
    expect(wrapper.find('.key-modal-input').props().value).to.equal('invalid')
    expect(wrapper.find('.key-modal-submit').length).to.equal(0)
    // initial validation plus simluated input change
    expect(validCounter).to.equal(2)
  })

  it('ObjectKeyModal test submit', function () {
    let submitCounter = 0
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={input => {
          return true
        }}
        submit={input => {
          expect(input).to.equal('test')
          submitCounter++
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )

    expect(wrapper.find('.key-modal-submit').length).to.equal(2)
    wrapper.find('.key-modal-submit').first().simulate('click')
    expect(submitCounter).to.equal(1)
  })

  it('ObjectKeyModal simulate modal close click', function () {
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={() => {
          return true
        }}
        submit={() => {
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )

    expect(wrapper.find('.key-modal-input').length).to.equal(1)
    wrapper.find('.key-modal-cancel').first().simulate('click')
  })

  it('ObjectKeyModal non-Enter key press', function () {
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={() => {
          return true
        }}
        submit={() => {
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )
    wrapper.setState({ input: 'test' })

    expect(wrapper.find('.key-modal-input').length).to.equal(1)
    wrapper.find('.key-modal-input').simulate('keyPress', { key: 'up arrow' })
    expect(wrapper.find('.key-modal-input').length).to.equal(1)
    expect(wrapper.state('input')).to.equal('test')
  })

  it('ObjectKeyModal submit with Enter key press', function () {
    let submitCounter = 0
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={() => {
          return true
        }}
        submit={() => {
          submitCounter++
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )
    wrapper.setState({ input: 'test' })

    expect(wrapper.find('.key-modal-input').length).to.equal(1)
    wrapper.find('.key-modal-input').simulate('keyPress', { key: 'Enter' })
    expect(submitCounter).to.equal(1)
    expect(wrapper.state('input')).to.equal('test')
  })

  it('ObjectKeyModal close with Escape', function () {
    let submitCounter = 0
    const wrapper = mount(
      <ObjectKeyModal
        input='test'
        isValid={() => {
          return true
        }}
        submit={() => {
          submitCounter++
          return true
        }}
        theme='rjv-default'
        rjvId={rjvId}
      />
    )
    wrapper.setState({ input: 'test' })

    expect(wrapper.find('.key-modal-input').length).to.equal(1)
    wrapper.find('.key-modal-input').simulate('keyPress', { key: 'Escape' })
    expect(submitCounter).to.equal(0)
    expect(wrapper.state('input')).to.equal('test')
  })
})
