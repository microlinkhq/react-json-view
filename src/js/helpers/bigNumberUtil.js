import JSONBig from 'json-bigint'

// Avoid: `import bigNumberImpl from 'bignumber.js'`
const bigNumberImpl = require('bignumber.js')

import { toType } from './util'

/**
 *
 * Refer https://github.com/sidorares/json-bigint?tab=readme-ov-file#json-bigint
 * ```
 * JSON.parse/stringify with bigints support. Based on
 * Douglas Crockford JSON.js package and bignumber.js library.
 * ``
 * 
 * @todo support the specified implement
 */
const defaultBigNumberImplement = bigNumberImpl
const defaultJSONImplement = JSONBig

export { defaultJSONImplement, defaultBigNumberImplement }

function getEnsureSrcDataType (src) {
  const srcType = src === null || src === undefined ? undefined : toType(src)
  const validSrcTypes = ['string', 'object', 'array']

  if (validSrcTypes.find(type => type == srcType)) {
    return srcType
  }

  return undefined
}

// Only array or object or error-message's object will be return
export function getEnsureSrc (src, JSONImpl = defaultJSONImplement) {
  const type = getEnsureSrcDataType(src)

  // type should json string or json object
  if (type === undefined) {
    const errorMsg = 'src property must be a valid json string or json object'
    console.error('react-json-view error:', errorMsg)

    // error object to warn
    src = {
      message: errorMsg
    }
  } else if (type === 'string') {
    const errorMsg = 'only support array-json string or object-json string'
    try {
      const parsedSrc = JSONImpl.parse(src)
      const type = getEnsureSrcDataType(parsedSrc)

      if (type !== 'object' && type !== 'array') {
        throw new Error(errorMsg)
      }

      return parsedSrc
    } catch (err) {
      console.error('react-json-view error:', errorMsg)

      // error object to warn
      src = {
        message: errorMsg
      }
    }
  }

  return src
}
