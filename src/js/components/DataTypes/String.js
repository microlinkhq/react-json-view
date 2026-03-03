import React from 'react'
import DataTypeLabel from './DataTypeLabel'
import { toType, escapeString } from './../../helpers/util'

// theme
import Theme from './../../themes/getStyle'

// attribute store for storing collapsed state
import AttributeStore from './../../stores/ObjectAttributes'

export default class extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: AttributeStore.get(
        props.rjvId,
        props.namespace,
        'collapsed',
        true
      )
    }
  }

  handleToggleCollapsed = () => {
    this.setState(
      {
        collapsed: !this.state.collapsed
      },
      () => {
        AttributeStore.set(
          this.props.rjvId,
          this.props.namespace,
          'collapsed',
          this.state.collapsed
        )
      }
    )
  }

  render () {
    const typeName = 'string'
    const { collapsed } = this.state
    const { props } = this
    const { collapseStringsAfterLength, theme, escapeStrings } = props
    let { value } = props
    const collapsible = toType(collapseStringsAfterLength) === 'integer'
    const style = { style: { cursor: 'default', wordBreak: 'break-all' } }

    if (escapeStrings) {
      value = escapeString(value)
    }

    if (collapsible && value.length > collapseStringsAfterLength) {
      style.style.cursor = 'pointer'
      if (collapsed) {
        value = (
          <span>
            {value.substring(0, collapseStringsAfterLength)}
            <span {...Theme(theme, 'ellipsis')}> ...</span>
          </span>
        )
      }
    }

    return (
      <div {...Theme(theme, 'string')}>
        <DataTypeLabel typeName={typeName} {...props} />
        <span
          className='string-value'
          {...style}
          onClick={this.handleToggleCollapsed}
        >
          "{value}"
        </span>
      </div>
    )
  }
}
