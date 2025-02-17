'use strict'

//import react and reactDom for browser rendering
import React from 'react'
import ReactDom from 'react-dom'

import {
  ReactPureJsonView,
  defaultBigNumberImplement
} from './../../src/js/index'

const render = (
  {
    getExampleArray,
    getExampleJson1,
    getExampleJson2,
    getExampleJson3,
    getExampleJson4,
    getExampleWithStringEscapeSequences,

    __isStringifyDataGetter__: isStringifyDataGetter
  },
  JsonViewer,
  bigNumber = defaultBigNumberImplement
) => {
  const specialProps = {
    ...(bigNumber ? { bigNumber } : undefined)
  }

  const specialRender =
    ReactPureJsonView === JsonViewer && isStringifyDataGetter ? (
      <div style={{ padding: '30px' }}>
        <textarea readOnly style={{width: 500, height: 80, resize: 'none'}} value={`\
<ReactPureJsonView
  {/* src='<json string>', including big number ... */}
  src='[9223372036854775807,0.0060254656709730629]'
/>
`}>

        </textarea>
      <ReactPureJsonView
        src={'[9223372036854775807,0.0060254656709730629]'}
        style={{ backgroundColor: 'white' }}
      />
      </div>
    ) : null

  //render 2 different examples of the react-json-view component
  ReactDom.render(
    <div>
      {specialRender}

      {/* just pass in your JSON to the src attribute */}
      <JsonViewer
        {...specialProps}
        sortKeys
        style={{ padding: '30px', backgroundColor: 'white' }}
        src={getExampleJson1()}
        quotesOnKeys={false}
        collapseStringsAfterLength={12}
        onEdit={e => {
          console.log('edit callback', e)
          if (e.new_value == 'error') {
            return false
          }
        }}
        onDelete={e => {
          console.log('delete callback', e)
        }}
        onAdd={e => {
          console.log('add callback', e)
          if (e.new_value == 'error') {
            return false
          }
        }}
        onSelect={e => {
          console.log('select callback', e)
          console.log(e.namespace)
        }}
        displayObjectSize={true}
        name={'dev-server'}
        enableClipboard={copy => {
          console.log('you copied to clipboard!', copy)
        }}
        shouldCollapse={({ src, namespace, type }) => {
          if (type === 'array' && src.indexOf('test') > -1) {
            return true
          } else if (namespace.indexOf('moment') > -1) {
            return true
          }
          return false
        }}
        defaultValue=''
      />

      <br />

      {/* use a base16 theme */}
      <JsonViewer
        {...specialProps}
        src={getExampleJson1()}
        theme='railscasts'
        validationMessage="You're doing something wrong."
        collapseStringsAfterLength={15}
        onEdit={e => {
          console.log(e)
          if (e.new_value === 'error') {
            return false
          }
        }}
        onDelete={e => {
          console.log(e)
        }}
        onAdd={e => {
          console.log(e)
          if (e.new_value === 'error') {
            return false
          }
        }}
        name={false}
        iconStyle='triangle'
        shouldCollapse={({ src, type }) =>
          type === 'object' &&
          src.constructor &&
          src.constructor.name === 'Moment'
        }
        selectOnFocus
      />

      <br />

      {/* initialize this one with a name and default collapsed */}
      <JsonViewer
        src={getExampleJson2()}
        collapsed={true}
        name={'feature_set'}
        displayDataTypes={false}
        indentWidth={2}
      />

      <br />

      {/* initialize this one with a name and default collapsed */}
      <JsonViewer
        src={getExampleJson2()}
        collapsed={1}
        name={'feature_set'}
        displayDataTypes={false}
        indentWidth={5}
      />

      <br />

      {/* initialize an example with a long string */}
      <JsonViewer
        src={getExampleJson3()}
        collapsed={true}
        name={'collapsed_by_default_example'}
        indentWidth={8}
        displayObjectSize={false}
        displayDataTypes={false}
        enableClipboard={false}
      />

      <br />

      {/*demo array support*/}
      <JsonViewer
        src={getExampleArray()}
        theme='solarized'
        onEdit={edit => {
          console.log(edit)
        }}
      />

      <br />

      {/* custom theme example */}
      <JsonViewer
        {...specialProps}
        enableClipboard={false}
        src={getExampleJson1()}
        shouldCollapse={({ src, namespace, type }) =>
          namespace.indexOf('moment') > -1
        }
        theme={{
          base00: 'white',
          base01: '#ddd',
          base02: '#ddd',
          base03: '#444',
          base04: 'purple',
          base05: '#444',
          base06: '#444',
          base07: '#444',
          base08: '#444',
          base09: 'rgba(70, 70, 230, 1)',
          base0A: 'rgba(70, 70, 230, 1)',
          base0B: 'rgba(70, 70, 230, 1)',
          base0C: 'rgba(70, 70, 230, 1)',
          base0D: 'rgba(70, 70, 230, 1)',
          base0E: 'rgba(70, 70, 230, 1)',
          base0F: 'rgba(70, 70, 230, 1)'
        }}
      />

      <JsonViewer
        theme='hopscotch'
        collapsed={false}
        name='large_array'
        groupArraysAfterLength={50}
        src={getExampleJson4()}
      />

      {/* Name as colored react component */}
      <JsonViewer
        collapsed
        name={
          <span style={{ color: 'red', fontWeight: 800 }}>
            React Element as name
          </span>
        }
        src={getExampleJson2()}
      />

      {/* String with special escape sequences */}
      <JsonViewer
        theme='monokai'
        name='String with special escape sequences'
        src={getExampleWithStringEscapeSequences()}
      />
    </div>,
    document.getElementById('app-container')
  )
}

export default render
