import React from 'react'
import { render, mount } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'
import { JSDOM } from 'jsdom'

import Index from './../../../src/js/index'
import dispatcher from './../../../src/js/helpers/dispatcher'

const { window } = new JSDOM()
global.window = window
global.document = window.document

describe('<Index />', function () {
  for (const action of ['VARIABLE_UPDATED', 'VARIABLE_ADDED', 'VARIABLE_REMOVED']) {
    it(`does not include a rejected ${action} in a later accepted edit`, function () {
      const src = { locked: 1, editable: 2 }
      const onEdit = sinon.spy(change => change.name === 'editable')
      const wrapper = mount(
        <Index src={src} onEdit={onEdit} onAdd={() => false} onDelete={() => false} />
      )
      try {
        const rjvId = wrapper.instance().rjvId
        dispatcher.dispatch({
          name: action,
          rjvId,
          data: {
            name: action === 'VARIABLE_ADDED' ? 'added' : 'locked',
            namespace: ['root'],
            new_value: 3,
            existing_value: action === 'VARIABLE_ADDED' ? undefined : 1,
            variable_removed: action === 'VARIABLE_REMOVED'
          }
        })
        expect(wrapper.state('src')).to.deep.equal(src)
        dispatcher.dispatch({
          name: 'VARIABLE_UPDATED',
          rjvId,
          data: {
            name: 'editable',
            namespace: ['root'],
            new_value: 4,
            existing_value: 2
          }
        })
        expect(onEdit.lastCall.args[0].updated_src).to.deep.equal({ locked: 1, editable: 4 })
        expect(wrapper.state('src')).to.deep.equal({ locked: 1, editable: 4 })
        expect(src).to.deep.equal({ locked: 1, editable: 2 })
      } finally {
        wrapper.unmount()
      }
    })
  }

  it('keeps the nested path when a type-changing edit is rejected twice', function () {
    const src = { branch: { locked: 1 } }
    const onEdit = sinon.spy(() => false)
    const wrapper = mount(<Index src={src} onEdit={onEdit} />)
    try {
      for (let attempt = 0; attempt < 2; attempt++) {
        wrapper.find('.click-to-edit-icon').hostNodes().simulate('click')
        wrapper.find('textarea').simulate('change', { target: { value: 'undefined' } })
        wrapper.find('.edit-check.detected').hostNodes().simulate('click')
        expect(onEdit.lastCall.args[0].namespace).to.deep.equal(['branch'])
        expect(onEdit.lastCall.args[0].updated_src).to.deep.equal({ branch: { locked: undefined } })
        expect(wrapper.state('src')).to.deep.equal(src)
      }
      expect(onEdit.callCount).to.equal(2)
      expect(src).to.deep.equal({ branch: { locked: 1 } })
    } finally {
      wrapper.unmount()
    }
  })

  it('check data type labels from index', function () {
    const wrapper = render(
      <Index
        src={{
          bool: true,
          str: 'test',
          int: 5,
          nan: NaN,
          null: null,
          func: test => {},
          obj: {
            arrChild: [1, 2, 'three'],
            objChild: {
              one: 1,
              two: 'two'
            }
          },
          arr: [[1, 'two'], { one: 'one', two: 2 }],
          regexp: /[0-9]/gi
        }}
      />
    )
    expect(wrapper.find('.data-type-label')).to.have.length(14)
    expect(wrapper.find('.data-type-label')).to.have.length(14)
  })

  it('check object-size labels from index', function () {
    const wrapper = mount(
      <Index
        src={{
          bool: true,
          str: 'test',
          int: 5,
          nan: NaN,
          null: null,
          func: test => {},
          obj: {
            arrChild: [1, 2, 'three'],
            objChild: {
              one: 1,
              two: 'two'
            }
          },
          arr: [[1, 'two'], { one: 'one', two: 2 }],
          regexp: /[0-9]/gi
        }}
        displayObjectSize
        displayDataTypes
        enableClipboard={false}
      />
    )
    expect(wrapper.find('.object-size')).to.have.length(7)

    wrapper.setProps({ displayObjectSize: false })
    expect(wrapper.find('.object-size')).to.have.length(0)
  })

  it('src replaced with error message (ERROR OUTPUT EXPECTED)', function () {
    const wrapper = render(
      <Index src='{jsonEncodedString:true, createError:true}' />
    )
    expect(wrapper.find('.data-type-label')).to.have.length(1)
  })

  it('make sure copy to clipboard is displayed all properties', function () {
    const wrapper = render(
      <Index
        src={{
          test: true,
          passing: 'hopefully',
          arr: [5],
          obj: {},
          regexp: /[0-9]/gi
        }}
      />
    )
    expect(wrapper.find('.copy-to-clipboard-container')).to.have.length(7)
  })

  it('index test getDerivedStateFromProps', function () {
    sinon.spy(Index, 'getDerivedStateFromProps')
    // mount() will cause getDerivedStateFromProps to be called twice.
    // 1. before first render()
    // 2. result of setState() in componentDidMount()
    const wrapper = mount(<Index src={{ test: true }} />)
    expect(wrapper.find('.data-type-label')).to.have.length(1)
    // setProps() will cause getDerivedStateFromProps to be called once.
    wrapper.setProps({ src: { test1: true, test2: false } })
    // in total, it was called thrice.
    expect(Index.getDerivedStateFromProps.calledThrice).to.equal(true)
  })

  it('index can have ArrayGroup root component', function () {
    const wrapper = render(
      <Index
        name='test'
        groupArraysAfterLength={5}
        src={new Array(15).fill(0)}
      />
    )
    expect(wrapper.find('.array-group')).to.have.length(3)
  })

  it('length is correct even if an object has a length property', function () {
    const wrapper = render(
      <Index
        src={{
          first: 'first property',
          second: 'second property',
          length: 1000
        }}
      />
    )
    expect(wrapper.find('.object-size')).to.have.length(1)
  })

  it('should show commas when showComma is true', function () {
    const wrapper = render(
      <Index
        src={{
          first: 'first property',
          second: 'second property',
          third: 'third property'
        }}
        showComma
      />
    )
    // Check that commas are present in the rendered output
    expect(wrapper.text()).to.include(',')
  })

  it('should not show commas when showComma is false', function () {
    const wrapper = render(
      <Index
        src={{
          first: 'first property',
          second: 'second property',
          third: 'third property'
        }}
        showComma={false}
      />
    )
    // Check that commas are not present in the rendered output
    expect(wrapper.text()).to.not.include(',')
  })

  it('should default to showing commas when showComma is not specified', function () {
    const wrapper = render(
      <Index
        src={{
          first: 'first property',
          second: 'second property',
          third: 'third property'
        }}
      />
    )
    // Check that commas are present by default
    expect(wrapper.text()).to.include(',')
  })
})
