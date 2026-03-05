import React from 'react'
import { polyfill } from 'react-lifecycles-compat'
import { toType } from './../../helpers/util'

// data type components
import { JsonObject } from './DataTypes'

import VariableEditor from './../VariableEditor'
import VariableMeta from './../VariableMeta'
import ArrayGroup from './../ArrayGroup'
import ObjectName from './../ObjectName'

// attribute store
import AttributeStore from './../../stores/ObjectAttributes'

// icons
import { CollapsedIcon, ExpandedIcon } from './../ToggleIcons'

// theme
import Theme from './../../themes/getStyle'

// increment 1 with each nested object & array
const DEPTH_INCREMENT = 1
// single indent is 5px
const SINGLE_INDENT = 5

class RjvObject extends React.PureComponent {
  constructor (props) {
    super(props)
    const state = RjvObject.getState(props)
    this.state = {
      ...state,
      prevProps: {}
    }
  }

  static getState = props => {
    const size = Object.keys(props.src).length
    const expanded =
      (props.collapsed === false ||
        (props.collapsed !== true && props.collapsed > props.depth)) &&
      (!props.shouldCollapse ||
        props.shouldCollapse({
          name: props.name,
          src: props.src,
          type: toType(props.src),
          namespace: props.namespace
        }) === false) &&
      // initialize closed if object has no items
      size !== 0
    const state = {
      expanded: AttributeStore.get(
        props.rjvId,
        props.namespace,
        'expanded',
        expanded
      ),
      object_type: props.type === 'array' ? 'array' : 'object',
      parent_type: props.type === 'array' ? 'array' : 'object',
      size,
      hovered: false
    }
    return state
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { prevProps } = prevState
    if (
      nextProps.src !== prevProps.src ||
      nextProps.collapsed !== prevProps.collapsed ||
      nextProps.name !== prevProps.name ||
      nextProps.namespace !== prevProps.namespace ||
      nextProps.rjvId !== prevProps.rjvId
    ) {
      const newState = RjvObject.getState(nextProps)
      return {
        ...newState,
        prevProps: nextProps
      }
    }
    return null
  }

  handleToggleCollapsed = () => {
    this.setState(
      {
        expanded: !this.state.expanded
      },
      () => {
        AttributeStore.set(
          this.props.rjvId,
          this.props.namespace,
          'expanded',
          this.state.expanded
        )
      }
    )
  }

  handleKeySelect = () => {
    const { name, namespace, onSelect, src } = this.props
    const { object_type: objectType } = this.state

    if (typeof onSelect !== 'function') {
      return
    }

    const location = [...namespace]
    location.shift()
    if (location.length > 0) {
      location.pop()
    }

    onSelect({
      name,
      value: src,
      type: objectType,
      namespace: location
    })
  }

  getObjectContent = (depth, src, props) => {
    return (
      <div className='pushed-content object-container'>
        <div
          className='object-content'
          {...Theme(this.props.theme, 'pushed-content')}
        >
          {this.renderObjectContents(src, props)}
        </div>
      </div>
    )
  }

  getEllipsis = () => {
    const { size } = this.state

    if (size === 0) {
      // don't render an ellipsis when an object has no items
      return null
    } else {
      return (
        <div
          {...Theme(this.props.theme, 'ellipsis')}
          className='node-ellipsis'
          onClick={this.handleToggleCollapsed}
        >
          ...
        </div>
      )
    }
  }

  getObjectMetaData = src => {
    const { size, hovered } = this.state
    return <VariableMeta rowHovered={hovered} size={size} {...this.props} />
  }

  getBraceStart (objectType, expanded) {
    const { theme, iconStyle, parent_type: parentType } = this.props

    if (parentType === 'array_group') {
      return (
        <span>
          <span {...Theme(theme, 'brace')}>
            {objectType === 'array' ? '[' : '{'}
          </span>
        </span>
      )
    }

    const IconComponent = expanded ? ExpandedIcon : CollapsedIcon

    return (
      <span>
        <span
          onClick={this.handleToggleCollapsed}
          {...Theme(theme, 'brace-row')}
        >
          <div className='icon-container' {...Theme(theme, 'icon-container')}>
            <IconComponent {...{ theme, iconStyle }} />
          </div>
          <ObjectName {...this.props} onKeyClick={this.handleKeySelect} />
          <span {...Theme(theme, 'brace')}>
            {objectType === 'array' ? '[' : '{'}
          </span>
        </span>
      </span>
    )
  }

  render () {
    // `indentWidth` and `collapsed` props will
    // perpetuate to children via `...rest`
    const {
      depth,
      src,
      namespace,
      name,
      type,
      parent_type: parentType,
      theme,
      jsvRoot,
      iconStyle,
      showComma,
      isLast,
      ...rest
    } = this.props

    const { object_type: objectType, expanded } = this.state

    const styles = {}
    if (!jsvRoot && parentType !== 'array_group') {
      styles.paddingLeft = this.props.indentWidth * SINGLE_INDENT
    } else if (parentType === 'array_group') {
      styles.borderLeft = 0
      styles.display = 'inline'
    }

    return (
      <div
        className='object-key-val'
        onMouseEnter={() => this.setState({ ...this.state, hovered: true })}
        onMouseLeave={() => this.setState({ ...this.state, hovered: false })}
        {...Theme(theme, jsvRoot ? 'jsv-root' : 'objectKeyVal', styles)}
      >
        {this.getBraceStart(objectType, expanded)}
        {expanded
          ? this.getObjectContent(depth, src, {
            theme,
            iconStyle,
            ...rest
          })
          : this.getEllipsis()}
        <span className='brace-row'>
          <span
            style={{
              ...Theme(theme, 'brace').style,
              paddingLeft: expanded ? '3px' : '0px'
            }}
          >
            {objectType === 'array' ? ']' : '}'}
          </span>
        </span>
        {showComma && !isLast && !jsvRoot && (
          <span {...Theme(theme, 'comma')}>,</span>
        )}
        {this.getObjectMetaData(src)}
      </div>
    )
  }

  renderObjectContents = (variables, props) => {
    const {
      depth,
      parent_type: parentType,
      index_offset: indexOffset,
      groupArraysAfterLength,
      namespace,
      showComma
    } = this.props
    const { object_type: objectType } = this.state
    const elements = []
    let variable
    let keys = Object.keys(variables || {})
    if (this.props.sortKeys && objectType !== 'array') {
      keys = keys.sort()
    }

    keys.forEach((name, index) => {
      variable = new JsonVariable(name, variables[name], props.bigNumber)
      const isLast = index === keys.length - 1

      if (parentType === 'array_group' && indexOffset) {
        variable.name = parseInt(variable.name, 10) + indexOffset
      }
      if (!Object.prototype.hasOwnProperty.call(variables, name)) {
        return
      }
      if (variable.type === 'object') {
        elements.push(
          <JsonObject
            key={variable.name}
            depth={depth + DEPTH_INCREMENT}
            name={variable.name}
            src={variable.value}
            namespace={namespace.concat(variable.name)}
            parent_type={objectType}
            isLast={isLast}
            showComma={showComma}
            {...props}
          />
        )
      } else if (variable.type === 'array') {
        let ObjectComponent = JsonObject

        if (
          groupArraysAfterLength &&
          variable.value.length > groupArraysAfterLength
        ) {
          ObjectComponent = ArrayGroup
        }

        elements.push(
          <ObjectComponent
            key={variable.name}
            depth={depth + DEPTH_INCREMENT}
            name={variable.name}
            src={variable.value}
            namespace={namespace.concat(variable.name)}
            type='array'
            parent_type={objectType}
            isLast={isLast}
            showComma={showComma}
            {...props}
          />
        )
      } else {
        // include bigNumber
        elements.push(
          <VariableEditor
            key={variable.name + '_' + namespace}
            variable={variable}
            singleIndent={SINGLE_INDENT}
            namespace={namespace}
            type={this.props.type}
            isLast={isLast}
            showComma={showComma}
            {...props}
          />
        )
      }
    })

    return elements
  }
}

// just store name, value and type with a variable
class JsonVariable {
  constructor (name, value, bigNumber) {
    this.name = name
    this.value = value
    this.type = toType(value, bigNumber)
  }
}

polyfill(RjvObject)

// export component
export default RjvObject
