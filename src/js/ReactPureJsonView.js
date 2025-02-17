import React from 'react'
import { polyfill } from 'react-lifecycles-compat'

import {
  getEnsureSrc,
  defaultBigNumberImplement,
  defaultJSONImplement
} from './helpers/bigNumberUtil'
import ReactJsonView from './ReactJsonView'

// Support **json** or **json string** data as `prop.src` value, and also has built-in support
// for big-number and higher precision float. Using to present the pure data (json file or json reponse) in recommend,
// but also support json object/array.
// 
// Why this component should be included in recommend ?
// -  Today, the data is easy to obtain and rich. It is likely to contain big number and higher precision float.
//    Some data comes from golang or python program, and maybe the data validity exceeds the normal situation of javascript.
//    Automatically handle big number and precision issues, bringing convenience to general users and reducing their psychological burden.
//    This component will let `out of box` in your hand, and you donot handle javascript's big number or float precision problem.
//
//  A). Use ReactJsonView to render data which will include big number.
//  ```jsx
//    const data = await fetch("data/camera_fov30.json")
//    const src = JSONBig.parse(data) // Use `json-bigint`
//
//    // Use `bignumber.js`
//    return <ReactJsonView bigNumber={bigNumber} src={src} ... />
//  ```
//
//  B). Use ReactPureJsonView to render data which will include big number.
//  ```jsx
//    const data = await fetch("data/camera_fov30.json")
//    return <ReactPureJsonView src={data} ... />
//  ```
//
//  Which one is better? It's obvious!
//
//  Refer
//    [A] - [float problem](https://stackoverflow.com/questions/55280847/floating-point-number-in-javascript-ieee-754)
//    [B] - [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
class ReactPureJsonView extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      src: ReactPureJsonView.defaultProps.src,
      prevSrc: ReactPureJsonView.defaultProps.src
    }
  }

  // will trigger whenever setState() is called, or parent passes in new props.
  static getDerivedStateFromProps (nextProps, prevState) {
    const nextSrc = getEnsureSrc(nextProps.src, defaultJSONImplement)
    
    if (nextSrc !== prevState.prevSrc) {
      const newPartialState = {
        src: nextSrc,
        prevSrc: nextSrc
      }

      return newPartialState
    }
  }

  static defaultProps = {
    src: {}
  }

  render () {
    const props = {
      ...this.props,
      src: this.state.src,
      bigNumber: defaultBigNumberImplement
    }

    return <ReactJsonView {...props} />
  }
}

polyfill(ReactPureJsonView)

export default ReactPureJsonView

export { defaultBigNumberImplement, defaultJSONImplement }
