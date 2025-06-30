import './Semaforo.css'
import React, { useState } from 'react';


function Semaforo() {

    const [luzAtiva, setLuzAtiva] = useState('');

    return (
        <>
            <div className="semaforo">

                <div className={`luz ${luzAtiva === 'vermelho' ? 'vermelho' : ''}`}></div>
                <div  className={`luz ${luzAtiva === 'amarelo' ? 'amarelo' : ''}`}></div>
                <div className={`luz ${luzAtiva === 'verde' ? 'verde' : ''}`}></div>
            
                <div className="botoes">
                    <button onClick={() => setLuzAtiva('vermelho')}>Vermelho</button>
                    <button onClick={() => setLuzAtiva('amarelo')}>Amarelo</button>
                    <button onClick={() => setLuzAtiva('verde')}>Verde</button>
                </div>
            </div>
        </>
    )
};

export default Semaforo;