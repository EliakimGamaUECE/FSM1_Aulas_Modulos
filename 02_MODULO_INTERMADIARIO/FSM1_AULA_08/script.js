function verVelocidade(){

    let vel  = parseInt(document.getElementById("velocidade").value)
    
    if (vel > 80) {
        document.getElementById("res").innerHTML = ` Multado!!! Sua velocidade foi ${vel}km/h`
        document.body.style.backgroundColor = "red"
    }
    else{
        document.getElementById("res").innerHTML = ` Parabéns!!! Sua velocidade foi ${vel}km/h`
        document.body.style.backgroundColor = "green"
    }
}

function mudaBG(){
    document.body.style.backgroundColor = "grey"
}



function anoNascimento(){
    let ano  = parseInt(document.getElementById("ano").value)
    let data = 2025 - ano
    document.getElementById("res").innerHTML = `Sua idade ${data}`
}
