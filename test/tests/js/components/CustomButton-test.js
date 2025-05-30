import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import CustomButton from './../../../../src/js/components/CustomButton'

const pathJSX = (
  <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
);

describe('<CustomButton />', function () {
  it('CustomButton component should exist', function () {
    const logSpy = sinon.spy(console, 'log')
    const wrapper = shallow(
      <CustomButton
        clickCallback={(element) => console.log('It works!')}
        path={pathJSX}
        viewBox='0 0 40 40'
        title='A title example'
        className='class-example'
        hidden={false}
      />
    )

    expect(wrapper.find('span')).to.have.length(1)
    try {
      wrapper.find('.class-example').simulate('click')
      expect(logSpy.calledWith('It works!')).to.be.true
    } finally {
      logSpy.restore()
    }
    expect(
      wrapper.find('svg').containsMatchingElement(pathJSX)
    ).to.be.true
    expect(wrapper.find('svg').prop('viewBox')).to.equal('0 0 40 40')
    expect(wrapper.find('.class-example').prop('title')).to.equal('A title example')
    expect(wrapper.find('.class-example').prop('className')).to.equal('class-example')
  })

  it('CustomButton component should be hidden', function () {
    const wrapper = shallow(
      <CustomButton
        clickCallback={(element) => console.log('It works!')}
        path={pathJSX}
        viewBox='0 0 40 40'
        title='A title example'
        className='class-example'
        hidden
      />
    )

    expect(wrapper.find('span').prop('style')).to.have.property('display', 'none')
  })
})
