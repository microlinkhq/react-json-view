import ReactDom from 'react-dom'
import Index from './index'

require('./../style/scss/global.scss')

const app = document.getElementById('mac-react-container')

// app entrypoint
ReactDom.render(
  <div className='app-entry'>
    <Index />
  </div>,
  app
)
