import React from 'react'
import AutosizeTextarea from 'react-textarea-autosize'

import { escapeString } from './../helpers/util'
import dispatcher from './../helpers/dispatcher'
import parseInput from './../helpers/parseInput'
import stringifyVariable from './../helpers/stringifyVariable'
import CopyToClipboard from './CopyToClipboard'
import CustomButton from './CustomButton'

// data type components
import {
  JsonBoolean,
  JsonDate,
  JsonFloat,
  JsonFunction,
  JsonInteger,
  JsonNan,
  JsonNull,
  JsonRegexp,
  JsonString,
  JsonUndefined,
  JsonBigNumber
} from './DataTypes/DataTypes'

// clibboard icon
import { Edit, CheckCircle, RemoveCircle as Remove } from './icons'

// theme
import Theme from './../themes/getStyle'

class VariableEditor extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      editMode: false,
      editValue: '',
      hovered: false,
      renameKey: false,
      parsedInput: {
        type: false,
        value: null
      }
    }
  }

  render () {
    const {
      variable,
      singleIndent,
      type,
      theme,
      namespace,
      indentWidth,
      enableClipboard,
      onEdit,
      onDelete,
      onSelect,
      displayArrayKey,
      quotesOnKeys,
      keyModifier,
      customButtons
    } = this.props
    const { editMode } = this.state

    return (
      <div
        {...Theme(theme, 'objectKeyVal', {
          paddingLeft: indentWidth * singleIndent
        })}
        onMouseEnter={() => this.setState({ ...this.state, hovered: true })}
        onMouseLeave={() => this.setState({ ...this.state, hovered: false })}
        className='variable-row'
        key={variable.name}
      >
        {type == 'array'
          ? (
              displayArrayKey
                ? (
                  <span
                    {...Theme(theme, 'array-key')}
                    key={variable.name + '_' + namespace}
                  >
                    {variable.name}
                    <div {...Theme(theme, 'colon')}>:</div>
                  </span>
                  )
                : null
            )
          : (
            <span>
              <span
                {...Theme(theme, 'object-name')}
                className='object-key'
                key={variable.name + '_' + namespace}
              >
                {!!quotesOnKeys && (
                  <span style={{ verticalAlign: 'top' }}>"</span>
                )}
                <span style={{ display: 'inline-block' }}>{escapeString(variable.name)}</span>
                {!!quotesOnKeys && (
                  <span style={{ verticalAlign: 'top' }}>"</span>
                )}
              </span>
              <span {...Theme(theme, 'colon')}>:</span>
            </span>
            )}
        <div
          className='variable-value'
          onClick={
            onSelect === false && onEdit === false
              ? null
              : e => {
                const location = [...namespace]
                if (keyModifier(e, 'edit') && onEdit !== false) {
                  this.prepopInput(variable)
                } else if (onSelect !== false) {
                  location.shift()
                  onSelect({
                    ...variable,
                    namespace: location
                  })
                }
              }
          }
          {...Theme(theme, 'variableValue', {
            cursor: onSelect === false ? 'default' : 'pointer'
          })}
        >
          {this.getValue(variable, editMode)}
        </div>
        {enableClipboard
          ? (
            <CopyToClipboard
              rowHovered={this.state.hovered}
              hidden={editMode}
              src={variable.value}
              clickCallback={enableClipboard}
              {...{ theme, namespace: [...namespace, variable.name] }}
            />
            )
          : null}
        {customButtons[variable.type]
          ? (
            <CustomButton
              rowHovered={this.state.hovered}
              hidden={editMode}
              variableName={escapeString(variable.name)}
              src={variable.value}
              {...customButtons[variable.type]}
              {...{ theme, namespace: [...namespace, variable.type] }}
            />
            )
          : null}
        {onEdit !== false && editMode == false ? this.getEditIcon() : null}
        {onDelete !== false && editMode == false ? this.getRemoveIcon() : null}
      </div>
    )
  }

  getEditIcon = () => {
    const { variable, theme } = this.props

    return (
      <div
        className='click-to-edit'
        style={{
          verticalAlign: 'top',
          display: this.state.hovered ? 'inline-block' : 'none'
        }}
      >
        <Edit
          className='click-to-edit-icon'
          {...Theme(theme, 'editVarIcon')}
          onClick={() => {
            this.prepopInput(variable)
          }}
        />
      </div>
    )
  }

  prepopInput = variable => {
    if (this.props.onEdit !== false) {
      const stringifiedValue = stringifyVariable(variable.value, this.props.bigNumber)
      const detected = parseInput(stringifiedValue, this.props.bigNumber)
      this.setState({
        editMode: true,
        editValue: stringifiedValue,
        parsedInput: {
          type: detected.type,
          value: detected.value
        }
      })
    }
  }

  getRemoveIcon = () => {
    const { variable, namespace, theme, rjvId } = this.props

    return (
      <div
        className='click-to-remove'
        style={{
          verticalAlign: 'top',
          display: this.state.hovered ? 'inline-block' : 'none'
        }}
      >
        <Remove
          className='click-to-remove-icon'
          {...Theme(theme, 'removeVarIcon')}
          onClick={() => {
            dispatcher.dispatch({
              name: 'VARIABLE_REMOVED',
              rjvId,
              data: {
                name: variable.name,
                namespace,
                existing_value: variable.value,
                variable_removed: true
              }
            })
          }}
        />
      </div>
    )
  }

  getValue = (variable, editMode) => {
    const type = editMode ? false : variable.type
    const { props } = this
    switch (type) {
      case false:
        return this.getEditInput()
      case 'string':
        return <JsonString value={variable.value} {...props} />
      case 'integer':
        return <JsonInteger value={variable.value} {...props} />
      case 'float':
        return <JsonFloat value={variable.value} {...props} />
      case 'boolean':
        return <JsonBoolean value={variable.value} {...props} />
      case 'function':
        return <JsonFunction value={variable.value} {...props} />
      case 'null':
        return <JsonNull {...props} />
      case 'nan':
        return <JsonNan {...props} />
      case 'undefined':
        return <JsonUndefined {...props} />
      case 'date':
        return <JsonDate value={variable.value} {...props} />
      case 'regexp':
        return <JsonRegexp value={variable.value} {...props} />
      case 'bigNumber':
        return <JsonBigNumber value={variable.value} {...props} />
      default:
        // catch-all for types that weren't anticipated
        return <div className='object-value'>{JSON.stringify(variable.value)}</div>
    }
  }

  getEditInput = () => {
    const { keyModifier, selectOnFocus, theme } = this.props
    const { editValue } = this.state

    return (
      <div>
        <AutosizeTextarea
          type='text'
          ref={input => {
            if (input) {
              input[!selectOnFocus ? 'focus' : 'select']()
            }
          }}
          value={editValue}
          className='variable-editor'
          onChange={event => {
            const value = event.target.value
            const detected = parseInput(value, this.props.bigNumber)
            this.setState({
              editValue: value,
              parsedInput: {
                type: detected.type,
                value: detected.value
              }
            })
          }}
          onKeyDown={e => {
            switch (e.key) {
              case 'Escape': {
                this.setState({
                  editMode: false,
                  editValue: ''
                })
                break
              }
              case 'Enter': {
                if (keyModifier(e, 'submit')) {
                  this.submitEdit(true)
                }
                break
              }
            }
            e.stopPropagation()
          }}
          placeholder='update this value'
          minRows={2}
          {...Theme(theme, 'edit-input')}
        />
        <div {...Theme(theme, 'edit-icon-container')}>
          <Remove
            className='edit-cancel'
            {...Theme(theme, 'cancel-icon')}
            onClick={e => {
              if (e) {
                e.stopPropagation()
              }

              this.setState({ editMode: false, editValue: '' })
            }}
          />
          <CheckCircle
            className='edit-check string-value'
            {...Theme(theme, 'check-icon')}
            onClick={e => {
              if (e) {
                e.stopPropagation()
              }

              this.submitEdit()
            }}
          />
          <div>{this.showDetected()}</div>
        </div>
      </div>
    )
  }

  submitEdit = submit_detected => {
    const { variable, namespace, rjvId, bigNumber: BigNumber } = this.props
    const { editValue, parsedInput } = this.state
    let new_value = editValue
    if (submit_detected && parsedInput.type) {
      new_value = parsedInput.value
      if (BigNumber && parsedInput.type === 'bigNumber') {
        new_value = new BigNumber(new_value)
      }
    }
    this.setState({
      editMode: false
    })
    dispatcher.dispatch({
      name: 'VARIABLE_UPDATED',
      rjvId,
      data: {
        name: variable.name,
        namespace,
        existing_value: variable.value,
        new_value,
        variable_removed: false
      }
    })
  }

  showDetected = () => {
    const { theme, variable, namespace, rjvId } = this.props
    const { type, value } = this.state.parsedInput
    const detected = this.getDetectedInput()
    if (detected) {
      return (
        <div>
          <div {...Theme(theme, 'detected-row')}>
            {detected}
            <CheckCircle
              className='edit-check detected'
              style={{
                verticalAlign: 'top',
                paddingLeft: '3px',
                ...Theme(theme, 'check-icon').style
              }}
              onClick={e => {
                if (e) {
                  e.stopPropagation()
                }

                this.submitEdit(true)
              }}
            />
          </div>
        </div>
      )
    }
  }

  getDetectedInput = () => {
    const { parsedInput } = this.state
    const { type, value } = parsedInput
    const { props } = this
    const { theme } = props

    if (type !== false) {
      switch (type.toLowerCase()) {
        case 'object':
          return (
            <span>
              <span
                style={{
                  ...Theme(theme, 'brace').style,
                  cursor: 'default'
                }}
              >
                {'{'}
              </span>
              <span
                style={{
                  ...Theme(theme, 'ellipsis').style,
                  cursor: 'default'
                }}
              >
                ...
              </span>
              <span
                style={{
                  ...Theme(theme, 'brace').style,
                  cursor: 'default'
                }}
              >
                {'}'}
              </span>
            </span>
          )
        case 'array':
          return (
            <span>
              <span
                style={{
                  ...Theme(theme, 'brace').style,
                  cursor: 'default'
                }}
              >
                [
              </span>
              <span
                style={{
                  ...Theme(theme, 'ellipsis').style,
                  cursor: 'default'
                }}
              >
                ...
              </span>
              <span
                style={{
                  ...Theme(theme, 'brace').style,
                  cursor: 'default'
                }}
              >
                ]
              </span>
            </span>
          )
        case 'string':
          return <JsonString value={value} {...props} />
        case 'integer':
          return <JsonInteger value={value} {...props} />
        case 'float':
          return <JsonFloat value={value} {...props} />
        case 'boolean':
          return <JsonBoolean value={value} {...props} />
        case 'function':
          return <JsonFunction value={value} {...props} />
        case 'null':
          return <JsonNull {...props} />
        case 'nan':
          return <JsonNan {...props} />
        case 'undefined':
          return <JsonUndefined {...props} />
        case 'date':
          return <JsonDate value={new Date(value)} {...props} />
        case 'bignumber':
          return <JsonBigNumber value={value} {...props} />
      }
    }
  }
}

// export component
export default VariableEditor
