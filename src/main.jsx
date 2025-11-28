import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import './styles/home.css'
import './styles/about.css'
import './styles/projects.css'
import './styles/contact.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/React-Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
