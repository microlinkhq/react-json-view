import React from 'react'
import DataTypeLabel from './DataTypeLabel'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const typeName = 'float'
    const { props } = this
    return (
      <div {...Theme(props.theme, 'float')}>
        <DataTypeLabel typeName={typeName} {...props} />
        {this.props.value}
      </div>
    )
  }
}
