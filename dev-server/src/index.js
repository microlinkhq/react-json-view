'use strict'

//import react and reactDom for browser rendering
import React from 'react'
import ReactDom from 'react-dom'

import Moment from 'moment'

//import the react-json-view component (installed with npm)
import JsonViewer from './../../src/js/index'

// custom big number class, You can use existing libraries like `bignumber.js`, `decimal.js`, `big.js` etc.
class BigNumber {
  name = 'customName'
  constructor(value) {
    this.value = value
  }
  toString() {
    return this.value.toString()
  }
}

//render 2 different examples of the react-json-view component
ReactDom.render(
  <div>
    {/* just pass in your JSON to the src attribute */}
    <JsonViewer
      bigNumber={BigNumber}
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
      src={getExampleJson1()}
      bigNumber={BigNumber}
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

    {/* demo array support */}
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
      enableClipboard={false}
      src={getExampleJson1()}
      bigNumber={BigNumber}
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

    {/* Custom buttons according to the value type */}
    <JsonViewer
      bigNumber={BigNumber}
      sortKeys
      style={{ padding: '30px', backgroundColor: 'white' }}
      src={getExampleJson5()}
      quotesOnKeys={false}
      collapseStringsAfterLength={12}
      customButtons={{
        boolean: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        integer: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: (element) => element.src === 27
            ? <path d='M0 14l6-6-6-6z' />
            : <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: (element) => element.src === 27
            ? '0 0 15 15'
            : '0 0 40 40',
          title: (element) => element.src === 27
            ? 'Special title'
            : 'Example title',
          className: (element) => element.src === 27
            ? 'special-class'
            : 'class-example'
        },
        float: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        bigNumber: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        date: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        string: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: (element) => element.variableName === 'string-key-test'
            ? <path d='M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z' />
            : <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: (element) => element.variableName === 'string-key-test'
            ?'0 0 1792 1792'
            :'0 0 40 40',
          title: (element) => element.variableName === 'string-key-test'
            ? 'Special title'
            : 'Title example',
          className: (element) => element.variableName === 'string-key-test'
            ? 'special-class'
            : 'class-example'
        },
        regexp: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        array: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        empty_array: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        object: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        empty_object: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        function: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        undefined: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        null: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
        nan: {
          clickCallback: (element) => { console.log(JSON.stringify(element, null, 4)) },
          path: <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />,
          viewBox: '0 0 40 40',
          title: 'A title example',
          className: 'class-example'
        },
      }}
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
      name={'custom-buttons'}
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
  </div>,
  document.getElementById('app-container')
)

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

//just a function to get an example JSON object
function getExampleJson1 () {
  return {
    string: 'this is a test string',
    integer: 42,
    empty_array: [],
    empty_object: {},
    array: [1, 2, 3, 'test'],
    float: -2.757,
    undefined_var: undefined,
    parent: {
      sibling1: true,
      sibling2: false,
      sibling3: null,
      isString: value => {
        if (typeof value === 'string') {
          return 'string'
        } else {
          return 'other'
        }
      }
    },
    string_number: '1234',
    date: new Date(),
    moment: Moment(),
    regexp: /[0-9]/gi,
    bigNumber: new BigNumber('0.0060254656709730629123')
  }
}

//and another a function to get an example JSON object
function getExampleJson2 () {
  return {
    normalized: {
      '1-grams': {
        body: 1,
        testing: 1
      },
      '2-grams': {
        'testing body': 1
      },
      '3-grams': {}
    },
    noun_phrases: {
      body: 1
    },
    lemmatized: {
      '1-grams': {
        test: 1,
        body: 1
      },
      '2-grams': {
        'test body': 1
      },
      '3-grams': {}
    },
    dependency: {
      '1-grams': {
        testingVERBROOTtestingVERB: 1,
        bodyNOUNdobjtestingVERB: 1
      },
      '2-grams': {
        'testingVERBROOTtestingVERB bodyNOUNdobjtestingVERB': 1
      },
      '3-grams': {}
    }
  }
}

function getExampleJson3 () {
  return {
    example_information:
      'this example has the collapsed prop set to true and the indentWidth prop is set to 8',
    default_collapsed: true,
    collapsed_array: [
      'you expanded me',
      'try collapsing and expanding the root node',
      'i will still be expanded',
      {
        leaf_node: true
      }
    ]
  }
}

function getExampleJson4 () {
  const large_array = new Array(225).fill('this is a large array full of items')

  large_array.push(getExampleArray())

  large_array.push(new Array(75).fill(Math.random()))

  return large_array
}

function getExampleArray () {
  return [
    'you can also display arrays!',
    new Date(),
    1,
    2,
    3,
    {
      pretty_cool: true
    }
  ]
}

function getExampleWithStringEscapeSequences () {
  return { '\\\n\t\r\f\\n': '\\\n\t\r\f\\n' }
}

function getExampleJson5 () {
  return {
    string: 'this is a test string',
    'string-key-test': 'this is another test string',
    integer: 42,
    'integer-key-test': 27,
    empty_array: [],
    empty_object: {},
    array: [1, 2, 3, 'test'],
    float: -2.757,
    undefined_var: undefined,
    parent: {
      sibling1: true,
      sibling2: false,
      sibling3: null,
      sibling4: NaN,
      isString: value => {
        if (typeof value === 'string') {
          return 'string'
        } else {
          return 'other'
        }
      }
    },
    string_number: '1234',
    date: new Date(),
    moment: Moment(),
    regexp: /[0-9]/gi,
    bigNumber: new BigNumber('0.0060254656709730629123'),
  }
}
