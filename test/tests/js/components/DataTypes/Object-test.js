import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'

import JsonObject from './../../../../../src/js/components/DataTypes/Object'

describe('<JsonObject />', function () {
  const rjvId = 1

  it('Object component should have a data type label', function () {
    const src = {
      test: true
    }
    const wrapper = shallow(
      <JsonObject
        src={src}
        namespace={['root']}
        rjvId={rjvId}
        theme='rjv-default'
        indentWidth={1}
        depth={1}
        displayDataTypes
        type='object'
      />
    )
    expect(wrapper.find('.object-key-val')).to.have.length(1)
  })

  it('Object mount, multiple data type labels', function () {
    const src = {
      bool: true, // should have label
      int: 5, // should have label
      str: 'test', // should have label
      nan: NaN,
      null: null,
      undefined,
      func: function () {}, // should have label
      float: 1.325, // should have label
      arr: [
        1, // should have label
        2 // should have label
      ],
      obj: {
        test: true // should have label
      },
      empty_arr: [],
      empty_obj: {}
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['root']}
        rjvId={rjvId}
        theme='rjv-default'
        indentWidth={1}
        depth={1}
        collapsed={false}
        displayDataTypes
        type='object'
      />
    )
    expect(wrapper.find('.data-type-label')).to.have.length(8)
  })

  it('Object mount, no data type labels when collapsed', function () {
    const src = {
      bool: true, // should have label
      int: 5, // should have label
      str: 'test', // should have label
      nan: NaN,
      null: null,
      undefined,
      func: function () {}, // should have label
      float: 1.325, // should have label
      arr: [
        1, // should have label
        2 // should have label
      ],
      obj: {
        test: true // should have label
      }
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['root']}
        rjvId={rjvId}
        theme='rjv-default'
        indentWidth={1}
        depth={1}
        displayDataTypes
        collapsed
        type='object'
      />
    )
    expect(wrapper.find('.data-type-label')).to.have.length(0)
  })

  it('Array mount expanded', function () {
    const src = {
      arr1: [{ arr2: ['test'] }]
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['arr_test']}
        name='test'
        rjvId={rjvId}
        theme='rjv-default'
        indentWidth={1}
        collapsed={false}
        depth={1}
        displayDataTypes
        type='array'
      />
    )
    expect(wrapper.find('.expanded-icon')).to.have.length(4)
    expect(wrapper.find('.collapsed-icon')).to.have.length(0)
  })

  it('Array mount collapsed', function () {
    const src = {
      arr1: [{ arr2: ['test'] }]
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['arr_test']}
        name='test'
        rjvId={rjvId}
        theme='rjv-default'
        collapsed
        indentWidth={1}
        depth={1}
        type='array'
      />
    )
    expect(wrapper.find('.expanded-icon')).to.have.length(0)
    expect(wrapper.find('.collapsed-icon')).to.have.length(1)
  })

  it('Array mount collapsed circle', function () {
    const src = {
      arr1: [{ arr2: ['test'] }]
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['arr_test']}
        name='test'
        rjvId={rjvId}
        theme='rjv-default'
        collapsed
        indentWidth={1}
        depth={1}
        type='array'
      />
    )
    expect(wrapper.find('.expanded-icon')).to.have.length(0)
    expect(wrapper.find('.collapsed-icon')).to.have.length(1)
  })

  it('Array mount collapsed square', function () {
    const src = {
      arr1: [{ arr2: ['test'] }]
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['arr_test']}
        name='test'
        rjvId={rjvId}
        theme='rjv-default'
        collapsed
        indentWidth={1}
        depth={1}
        iconStyle='square'
        type='array'
      />
    )
    expect(wrapper.find('.expanded-icon')).to.have.length(0)
    expect(wrapper.find('.collapsed-icon')).to.have.length(1)
  })

  it('Array mount collapsed triangle', function () {
    const src = {
      arr1: [{ arr2: ['test'] }]
    }
    const wrapper = render(
      <JsonObject
        src={src}
        namespace={['arr_test']}
        name='test'
        rjvId={rjvId}
        theme='rjv-default'
        collapsed
        indentWidth={1}
        depth={1}
        iconStyle='triangle'
        type='array'
      />
    )
    expect(wrapper.find('.expanded-icon')).to.have.length(0)
    expect(wrapper.find('.collapsed-icon')).to.have.length(1)
  })

  it('non-empty object should be expanded', function () {
    const src = { test: true }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        collapsed={false}
      />
    )
    expect(wrapper.state('expanded')).to.equal(true)
  })

  it('empty object should not be expanded', function () {
    const src = {}

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        collapsed={false}
      />
    )
    expect(wrapper.state('expanded')).to.equal(false)
  })

  it('non-empty array should be expanded', function () {
    const src = [1, 2, 3]

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        collapsed={false}
      />
    )
    expect(wrapper.state('expanded')).to.equal(true)
  })

  it('Object should call onSelect when clicking key for object values', function () {
    const src = {}
    let selected = null

    const wrapper = mount(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root', 'settings']}
        name='settings'
        rjvId={rjvId}
        collapsed={false}
        indentWidth={1}
        onSelect={data => {
          selected = data
        }}
      />
    )

    wrapper.find('.object-key').first().simulate('click')

    expect(selected).to.deep.equal({
      name: 'settings',
      value: src,
      type: 'object',
      namespace: []
    })
  })

  it('Object should call onSelect when clicking key for array values', function () {
    const src = []
    let selected = null

    const wrapper = mount(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root', 'items']}
        name='items'
        type='array'
        rjvId={rjvId}
        collapsed={false}
        indentWidth={1}
        onSelect={data => {
          selected = data
        }}
      />
    )

    wrapper.find('.object-key').first().simulate('click')

    expect(selected).to.deep.equal({
      name: 'items',
      value: src,
      type: 'array',
      namespace: []
    })
  })

  it('empty array should not be expanded', function () {
    const src = []

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        collapsed={false}
        indentWidth={1}
      />
    )
    expect(wrapper.state('expanded')).to.equal(false)
  })

  it('non-empty array should have ellipsis', function () {
    const src = [1, 2, 3]

    const wrapper = render(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        collapsed
        indentWidth={1}
      />
    )

    expect(wrapper.find('.node-ellipsis')).to.have.length(1)
  })

  it('empty array should not have ellipsis', function () {
    const src = []

    const wrapper = render(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        collapsed
        indentWidth={1}
      />
    )

    expect(wrapper.find('.node-ellipsis')).to.have.length(0)
  })

  it('should collapse at shouldCollapse logic', function () {
    const src = { prop1: 1, prop2: 2, prop3: 3 }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        collapsed={false}
        shouldCollapse={() => true}
      />
    )

    expect(wrapper.state('expanded')).to.equal(false)
  })

  it('should expand based on shouldCollapse logic', function () {
    const src = { prop1: 1, prop2: 2, prop3: 3 }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        collapsed={false}
        shouldCollapse={() => false}
        indentWidth={1}
      />
    )

    expect(wrapper.state('expanded')).to.equal(true)
  })
  it('sort object keys', () => {
    const src = {
      d: 'd',
      b: 'b',
      a: 'a',
      c: 'c'
    }

    const wrapper = render(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        sortKeys
        collapsed={false}
        shouldCollapse={() => false}
        quotesOnKeys
        indentWidth={1}
      />
    )
    expect(wrapper.text()).to.equal('"":{"a":"a""b":"b""c":"c""d":"d"}')
  })

  it('do not sort object keys', () => {
    const src = {
      d: 'd',
      b: 'b',
      a: 'a',
      c: 'c'
    }

    const wrapper = render(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        collapsed={false}
        shouldCollapse={() => false}
        quotesOnKeys
        indentWidth={1}
      />
    )
    expect(wrapper.text()).to.equal('"":{"d":"d""b":"b""a":"a""c":"c"}')
  })

  it('Object should show comma when showComma is true and not last element', function () {
    const src = {
      prop1: 1,
      prop2: 2
    }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        showComma
        isLast={false}
        collapsed={false}
        indentWidth={1}
        depth={1}
        type='object'
      />
    )
    expect(
      wrapper.find('span').someWhere(node => node.text() === ',')
    ).to.equal(true)
  })

  it('Object should not show comma when showComma is false', function () {
    const src = {
      prop1: 1,
      prop2: 2
    }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        showComma={false}
        isLast={false}
        collapsed={false}
        indentWidth={1}
        depth={1}
        type='object'
      />
    )
    expect(
      wrapper.find('span').someWhere(node => node.text() === ',')
    ).to.equal(false)
  })

  it('Object should not show comma when isLast is true', function () {
    const src = {
      prop1: 1,
      prop2: 2
    }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        showComma
        isLast
        collapsed={false}
        indentWidth={1}
        depth={1}
        type='object'
      />
    )
    expect(
      wrapper.find('span').someWhere(node => node.text() === ',')
    ).to.equal(false)
  })

  it('Object should not show comma when jsvRoot is true', function () {
    const src = {
      prop1: 1,
      prop2: 2
    }

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        showComma
        isLast={false}
        jsvRoot
        collapsed={false}
        indentWidth={1}
        depth={1}
        type='object'
      />
    )
    expect(
      wrapper.find('span').someWhere(node => node.text() === ',')
    ).to.equal(false)
  })

  it('Object should show circular reference component', function () {
    const src = {
      prop1: 1,
      prop2: 2
    }
    src.self = src;

    const wrapper = shallow(
      <JsonObject
        src={src}
        theme='rjv-default'
        namespace={['root']}
        rjvId={rjvId}
        showComma
        isLast={false}
        jsvRoot
        collapsed={false}
        indentWidth={1}
        depth={1}
        type='object'
      />
    )
    //Not a very good test.  We should be checking that the name of the corresponding property is correct as well, 
    //but this is better than nothing for now.
    var circularReferenceComponent = wrapper.find('span').someWhere(node => node.text() === '[CIRCULAR REFERENCE]');
    expect(circularReferenceComponent).to.not.be.undefined;
  })
})
