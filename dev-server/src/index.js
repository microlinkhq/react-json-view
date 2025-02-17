'use strict'

//import react and reactDom for browser rendering
import React from 'react'

import render from './render'

//import the react-json-view component (installed with npm)
import JsonViewer, {
  ReactPureJsonView as PureJsonView
} from './../../src/js/index'

// import  test json data
import * as defaultTestJsonData from './object.test-data'

import { exported as stringTestJsonData } from './string.test-data'

const search = new URLSearchParams(location.search)
const json_string = search.get('json_string')

const appTitle = document.querySelector('#app-title')

if (json_string) {
  if (json_string === 'true') {
    appTitle.textContent = 'ReactPureJsonView: json string for prop.src'
    render(stringTestJsonData, PureJsonView, null)
  } else if (json_string === 'false') {
    appTitle.textContent = 'ReactPureJsonView: json object/array for prop.src'
    render(defaultTestJsonData, PureJsonView, null)
  } else {
    console.error('invalid option')
  }
} else {
  appTitle.textContent = 'ReactJsonView: json object/array for prop.src'
  render(defaultTestJsonData, JsonViewer)
}
