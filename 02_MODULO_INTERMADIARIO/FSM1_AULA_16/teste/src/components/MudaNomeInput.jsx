import { useRef, useContext } from "react";
import { UserContext } from "./UserContext";

function MudaNomeInput() {
  const inputRef = useRef();
  const { nome, setNome } = useContext(UserContext); // pega nome atual e função para alterar

  const salvar = () => {
    const nomeDigitado = inputRef.current.value;
    localStorage.setItem("nome", nomeDigitado);
    setNome(nomeDigitado);
    alert("Nome salvo!");
  };

  return (
    <div>
      <h2>Digite seu nome:</h2>
      <input ref={inputRef} type="text" placeholder="Seu nome" />
      <button onClick={salvar}>Salvar</button>

      <div>
        <h2>Nome salvo: {nome || "nenhum nome salvo ainda"}</h2> 
      </div>
    </div>
  );
}

export default MudaNomeInput;


