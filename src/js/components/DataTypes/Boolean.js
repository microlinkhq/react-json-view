import React from 'react'
import DataTypeLabel from './DataTypeLabel'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const typeName = 'bool'
    const { props } = this

    return (
      <div {...Theme(props.theme, 'boolean')}>
        <DataTypeLabel typeName={typeName} {...props} />
        {props.value ? 'true' : 'false'}
      </div>
    )
  }
}
