import FilhoRecebeDados from './FilhoRecebeDados';
import { useContext } from 'react';
import { UserContext } from './UserContext';

function PaiMandaDados () {
  const { nome } = useContext(UserContext);
  let idade = 22;
  let prof = "Dev";

  return (
    <FilhoRecebeDados 
      nome={nome} 
      idade={idade} 
      prof={prof} 
    />
  );
}

export default PaiMandaDados;
