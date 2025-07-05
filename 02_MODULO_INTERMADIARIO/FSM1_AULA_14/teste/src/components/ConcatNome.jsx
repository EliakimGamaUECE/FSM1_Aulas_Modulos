import {useState} from "react";


function ConcatNome(){

   const [nome,setNome] = useState("Eliakim");

   const muda = () => {
        setNome(nome + " Gama")
   }

   const tira = () => {
        setNome(nome.replace(nome,"Eliakim"))
   }

    return(

        <>
            <h1>{nome}</h1>
            <button onClick={muda}>Insere nome Nome</button>
            <button onClick={tira}>Remove Nome gama</button>
        </>

    )
};

export default ConcatNome;