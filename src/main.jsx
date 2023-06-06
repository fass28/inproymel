import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './assets/components/NavBar'
import { Footer } from './assets/components/Footer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Footer/>
  </React.StrictMode>,
)
