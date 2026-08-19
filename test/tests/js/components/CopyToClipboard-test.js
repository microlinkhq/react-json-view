import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import CopyToClipboard from './../../../../src/js/components/CopyToClipboard'

function copyToClipboard (src) {
  const copied = []
  const { clipboard } = global.navigator

  global.navigator.clipboard = {
    writeText: textToCopy => {
      copied.push(textToCopy)
      return Promise.resolve()
    }
  }

  const wrapper = shallow(
    <CopyToClipboard
      src={src}
      namespace={['root']}
      theme='rjv-default'
      hidden={false}
    />
  )

  try {
    wrapper.find('.copy-to-clipboard-container').childAt(0).simulate('click')
  } finally {
    wrapper.unmount()
    global.navigator.clipboard = clipboard
  }

  return copied
}

describe('<CopyToClipboard />', function () {
  it('CopyToClipboard clipboard should exist', function () {
    const wrapper = shallow(
      <CopyToClipboard
        src={{ test: true }}
        theme='rjv-default'
        clickCallback
        hidden={false}
      />
    )
    expect(wrapper.find('.copy-to-clipboard-container')).to.have.length(1)
  })

  it('CopyToClipboard clipboard should be hidden', function () {
    const wrapper = shallow(
      <CopyToClipboard
        src={{ test: true }}
        theme='rjv-default'
        clickCallback
        hidden
      />
    )
    // not sure how to test css attribute
    expect(wrapper.find('.copy-to-clipboard-container')).to.have.length(1)
  })

  it('CopyToClipboard copies a string without quotes', function () {
    expect(copyToClipboard('a string')).to.deep.equal(['a string'])
  })

  it('CopyToClipboard copies an object as JSON', function () {
    expect(copyToClipboard({ test: true })).to.deep.equal([
      JSON.stringify({ test: true }, null, '  ')
    ])
  })

  it('CopyToClipboard copies an array as JSON', function () {
    expect(copyToClipboard(['a string', 1])).to.deep.equal([
      JSON.stringify(['a string', 1], null, '  ')
    ])
  })

  it('CopyToClipboard copies a number as JSON', function () {
    expect(copyToClipboard(1)).to.deep.equal(['1'])
  })

  it('CopyToClipboard copies a boolean as JSON', function () {
    expect(copyToClipboard(true)).to.deep.equal(['true'])
  })

  it('CopyToClipboard copies null as JSON', function () {
    expect(copyToClipboard(null)).to.deep.equal(['null'])
  })

  it('CopyToClipboard copies a function as source text', function () {
    const noop = function () {}
    expect(copyToClipboard(noop)).to.deep.equal([noop.toString()])
  })

  it('CopyToClipboard copies a regexp as source text', function () {
    expect(copyToClipboard(/pattern/g)).to.deep.equal(['/pattern/g'])
  })
})
