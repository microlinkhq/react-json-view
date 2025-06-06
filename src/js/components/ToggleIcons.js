import React from 'react'
import Theme from './../themes/getStyle'

import {
  CircleMinus,
  CirclePlus,
  SquareMinus,
  SquarePlus,
  ArrowRight,
  ArrowDown
} from './icons'

export function ExpandedIcon (props) {
  const { theme, iconStyle } = props
  switch (iconStyle) {
    case 'triangle':
      return (
        <ArrowDown {...Theme(theme, 'expanded-icon')} className='expanded-icon' />
      )
    case 'square':
      return (
        <SquareMinus {...Theme(theme, 'expanded-icon')} className='expanded-icon' />
      )
    default:
      return (
        <CircleMinus {...Theme(theme, 'expanded-icon')} className='expanded-icon' />
      )
  }
}

export function CollapsedIcon (props) {
  const { theme, iconStyle } = props
  switch (iconStyle) {
    case 'triangle':
      return (
        <ArrowRight
          {...Theme(theme, 'collapsed-icon')}
          className='collapsed-icon'
        />
      )
    case 'square':
      return (
        <SquarePlus
          {...Theme(theme, 'collapsed-icon')}
          className='collapsed-icon'
        />
      )
    default:
      return (
        <CirclePlus
          {...Theme(theme, 'collapsed-icon')}
          className='collapsed-icon'
        />
      )
  }
}
