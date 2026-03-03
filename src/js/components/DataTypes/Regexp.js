import React from 'react'
import DataTypeLabel from './DataTypeLabel'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const typeName = 'regexp'
    const { props } = this
    return (
      <div {...Theme(props.theme, 'regexp')}>
        <DataTypeLabel typeName={typeName} {...props} />
        {this.props.value.toString()}
      </div>
    )
  }
}
