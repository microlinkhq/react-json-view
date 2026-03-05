import React from 'react'
import Theme from './../themes/getStyle'

export default function getObjectName (props) {
  const {
    parent_type: parentType,
    namespace,
    quotesOnKeys,
    theme,
    jsvRoot,
    name,
    displayArrayKey,
    onKeyClick
  } = props

  const displayName = props.name ? props.name : ''
  const clickHandler = typeof onKeyClick === 'function' ? onKeyClick : null

  if (jsvRoot && (name === false || name === null)) {
    return <span />
  } else if (parentType === 'array') {
    return displayArrayKey
      ? (
        <span
          {...Theme(theme, 'array-key')}
          key={namespace}
          onClick={clickHandler}
        >
          <span className='array-key'>{displayName}</span>
          <span {...Theme(theme, 'colon')}>:</span>
        </span>
        )
      : (
        <span />
        )
  } else {
    return (
      <span
        {...Theme(theme, 'object-name')}
        key={namespace}
        onClick={clickHandler}
      >
        <span className='object-key'>
          {quotesOnKeys && <span style={{ verticalAlign: 'top' }}>"</span>}
          <span>{displayName}</span>
          {quotesOnKeys && <span style={{ verticalAlign: 'top' }}>"</span>}
        </span>
        <span {...Theme(theme, 'colon')}>:</span>
      </span>
    )
  }
}
