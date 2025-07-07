import { useRef } from 'react';

function App2() {
  const inputRef = useRef(); // referência para o input

  const salvar = () => {
    localStorage.setItem("nome", inputRef.current.value); // salva no localStorage
  };

  return (
    <div>
      <h2>Digite seu nome:</h2>
      <input ref={inputRef} type="text" placeholder="Seu nome" />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

export default App2;
