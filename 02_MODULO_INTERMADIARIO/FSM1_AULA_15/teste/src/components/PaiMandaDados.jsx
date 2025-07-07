import FilhoRecebeDados from './FilhoRecebeDados'

function PaiMandaDados () {

    let nome = "Delfes"
    let idade = 22
    let prof  = "Dev"

    return(

        <FilhoRecebeDados 
        nome = {nome}
        idade = {idade}
        prof = {prof} 
        />

    )
}

export default PaiMandaDados