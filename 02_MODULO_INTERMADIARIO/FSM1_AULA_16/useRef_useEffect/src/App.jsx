import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState('Eliakim')

  useEffect(() => {
    alert('Opa!Você mudou alguma coisa!!!')
  },[nome])

  const mudaNomne = () => {
    setNome(nome + 'Gama')
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={mudaNomne}>
          {nome}
        </button>
      </div>
    </>
  )
}

export default App
