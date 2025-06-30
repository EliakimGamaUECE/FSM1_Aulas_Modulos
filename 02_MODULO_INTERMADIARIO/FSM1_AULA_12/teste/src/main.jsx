import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import ConcatNome from './ConcatNome.jsx'
import Semaforo from './Semaforo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Semaforo />
    {/* <Nav />
    <App />
    <ConcatNome/>
    <Footer /> */}
  </StrictMode>,
)
