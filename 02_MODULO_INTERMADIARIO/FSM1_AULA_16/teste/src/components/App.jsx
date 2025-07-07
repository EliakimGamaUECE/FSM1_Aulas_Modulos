import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import ConcateNome from './ConcatNome.jsx'
import MudaNomeInput from './MudaNomeInput.jsx'
import Semaforo from './Semaforo.jsx'
import PaiMandaDados from './PaiMandaDados.jsx'

import '../styles/App.css'

function App() {
  

  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<ConcateNome/>}></Route>
          <Route path='/mudanome' element={<MudaNomeInput/>} ></Route>
          <Route path='/semaforo' element={<Semaforo/>} ></Route>
          <Route path='/pai' element={<PaiMandaDados/>} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
