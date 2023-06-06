import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>,
)
