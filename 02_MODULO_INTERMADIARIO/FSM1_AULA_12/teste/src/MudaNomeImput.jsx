import {useState} from "react";


function NomeForm() {
    const [nome, setNome] = useState("");

    return (
        <div>
            <input 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                placeholder="Digite seu nome"
            />
            <p>Olá, {nome || "visitante"}!</p>
        </div>
    );
}

export default NomeForm;