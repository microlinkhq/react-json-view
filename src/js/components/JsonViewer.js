import React from 'react'
import JsonObject from './DataTypes/Object'
import ArrayGroup from './ArrayGroup'

export default class extends React.PureComponent {
  render = () => {
    const { props } = this
    let namespace = [props.name]
    let ObjectComponent = JsonObject
    if (typeof props.name === 'object' && !Array.isArray(props.name)) {
      // Support Classes and Functional Components
      const ComponentName =
        props.name?.displayName || props.name?.name || props.name?.type?.name
      namespace = [ComponentName || 'Anonymous']
    }

    if (
      Array.isArray(props.src) &&
      props.groupArraysAfterLength &&
      props.src.length > props.groupArraysAfterLength
    ) {
      ObjectComponent = ArrayGroup
    }

    return (
      <div class='pretty-json-container object-container'>
        <div class='object-content'>
          <ObjectComponent namespace={namespace} depth={0} jsvRoot {...props} />
        </div>
      </div>
    )
  }
}
