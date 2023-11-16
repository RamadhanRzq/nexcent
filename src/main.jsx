import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Service from './components/Service/Service.jsx'
import Feature from './components/Feature/Feature.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Service/>
    <Feature/>
  </React.StrictMode>,
)
