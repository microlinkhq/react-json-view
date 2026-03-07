import React from 'react'
import DataTypeLabel from './DataTypeLabel'

// theme
import Theme from './../../themes/getStyle'

export default class extends React.PureComponent {
  render () {
    const { props } = this
    const {
        parent_type: parentType,
        namespace,
        quotesOnKeys,
        indentWidth,
        theme,
        singleIndent,
        showComma,
        isLast,
        jsvRoot
    } = props

    const typeName = 'circularReference'
    const displayName = props.name ? props.name : '';
    return (
        <div className='variable-row'>
            <span
                {...Theme(theme, 'object-name')}
                key={namespace}
                {...Theme(theme, 'objectKeyVal', {
                    paddingLeft: indentWidth * singleIndent
                })}
                >
                <span className='object-key'>
                    {quotesOnKeys && <span style={{ verticalAlign: 'top' }}>"</span>}
                    <span>{displayName}</span>
                    {quotesOnKeys && <span style={{ verticalAlign: 'top' }}>"</span>}
                </span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
            <span {...Theme(theme, 'circularReference')}>[CIRCULAR REFERENCE]</span>
            {showComma && !isLast && !jsvRoot && (
                <span {...Theme(theme, 'comma')}>,</span>
            )}
        </div>
    )
  }
}