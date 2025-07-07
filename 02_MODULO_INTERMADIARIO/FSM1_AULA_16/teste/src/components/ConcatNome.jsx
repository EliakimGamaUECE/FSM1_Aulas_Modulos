import { useContext } from "react";
import { UserContext } from "./UserContext";

function ConcatNome() {
  const { nome, setNome } = useContext(UserContext);

  const muda = () => setNome(nome + " Gama");
  const tira = () => setNome("Eliakim");

  return (
    <>
      <h1>{nome}</h1>
      <button onClick={muda}>Insere Nome Gama</button>
      <button onClick={tira}>Remove Nome Gama</button>
    </>
  );
}

export default ConcatNome;
