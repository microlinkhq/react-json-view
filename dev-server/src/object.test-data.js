'use strict'

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

import Moment from 'moment'
import { defaultBigNumberImplement as BigNumber} from './../../src/js/index'

//just a function to get an example JSON object
export function getExampleJson1 () {
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
export function getExampleJson2 () {
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

export function getExampleJson3 () {
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

export function getExampleJson4 () {
  const large_array = new Array(225).fill('this is a large array full of items')

  large_array.push(getExampleArray())

  large_array.push(new Array(75).fill(Math.random()))

  return large_array
}

export function getExampleArray () {
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

export function getExampleWithStringEscapeSequences () {
  return { '\\\n\t\r\f\\n': '\\\n\t\r\f\\n' }
}
