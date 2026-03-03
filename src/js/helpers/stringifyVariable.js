import { toType } from './util'

export default (value, bigNumber) => {
  const type = toType(value, bigNumber)
  let stringValue
  switch (type) {
    case 'undefined': {
      stringValue = 'undefined'
      break
    }
    case 'nan':
      stringValue = 'NaN'
      break
    case 'string':
      stringValue = value
      break
    case 'bigNumber':
      stringValue = value.toString()
      break
    case 'date':
      stringValue = value.toString()
      break
    case 'function':
      stringValue = value.toString()
      break
    case 'regexp':
      stringValue = value.toString()
      break
    default: {
      try {
        stringValue = JSON.stringify(value, null, '  ')
      } catch (e) {
        stringValue = ''
      }
    }
  }

  return stringValue
}
