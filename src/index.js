import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position='bottom-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
