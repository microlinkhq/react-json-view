import React from 'react'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const { typeName, displayDataTypes, theme } = this.props
    if (displayDataTypes) {
      return (
        <span className='data-type-label' {...Theme(theme, 'data-type-label')}>
          {typeName}
        </span>
      )
    }
    return null
  }
}
