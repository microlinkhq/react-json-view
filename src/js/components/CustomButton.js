import React from 'react'
import { CustomIcon } from './icons'
import Theme from './../themes/getStyle'

export default class extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { clickCallback, src, namespace, variableName } = this.props

    clickCallback({
      variableName: variableName,
      src: src,
      namespace: namespace,
      name: namespace[namespace.length - 1]
    })
  }

  getClippyIcon = () => {
    const { theme } = this.props

    return (
      <CustomIcon
        className='custom-icon'
        {...this.props}
        {...Theme(theme, 'custom-icon')}
      />
    )
  }

  render () {
    const { src, theme, hidden, rowHovered, namespace, variableName, title, className } = this.props;
    const style = Theme(theme, 'custom-button').style
    let display = 'inline'

    if (hidden) {
      display = 'none'
    }

    return (
      <span
        className={typeof className === 'function'
          ? className({
            variableName: variableName,
            src: src,
            namespace: namespace,
            name: namespace[namespace.length - 1]
          })
          : typeof className === 'string'
            ? className
            : ''
        }
        title={typeof title === 'function'
          ? title({
            variableName: variableName,
            src: src,
            namespace: namespace,
            name: namespace[namespace.length - 1]
          })
          : typeof title === 'string'
            ? title
            : ''
        }
        style={{
          verticalAlign: 'top',
          display: rowHovered ? 'inline-block' : 'none'
        }}
      >
        <span
          style={{
            ...style,
            display: display
          }}
          onClick={this.handleClick}
        >
          {this.getClippyIcon()}
        </span>
      </span>
    )
  }
}
