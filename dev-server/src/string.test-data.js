'use strict'

import { defaultJSONImplement as JSONBig } from './../../src/js/index'

// import test json data
import * as defaultTestJsonData from './object.test-data'

const exported = {
  __isStringifyDataGetter__: true
}

Object.keys(defaultTestJsonData).forEach(key => {
  exported[key] = (...args) => {
    const data = defaultTestJsonData[key](...args)

    // Convert to json string, will throw the function which is not supported.
    return JSONBig.stringify(data)
  }
})

export { exported }
