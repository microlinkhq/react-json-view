import React from 'react'
import DataTypeLabel from './DataTypeLabel'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const typeName = 'date'
    const { props } = this
    const displayOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return (
      <div {...Theme(props.theme, 'date')}>
        <DataTypeLabel typeName={typeName} {...props} />
        <span className='date-value' {...Theme(props.theme, 'date-value')}>
          {props.value.toLocaleTimeString('en-us', displayOptions)}
        </span>
      </div>
    )
  }
}
