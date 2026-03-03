import React from 'react'
import DataTypeLabel from './DataTypeLabel'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const typeName = 'bigNumber'
    const { props } = this
    return (
      <div {...Theme(props.theme, 'bigNumber')}>
        <DataTypeLabel typeName={typeName} {...props} />
        {this.props.value.toString()}
      </div>
    )
  }
}
