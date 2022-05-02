import React from 'react';
import './CardUsuario.css'


function CardUsuario(props) {
    return (
        <div className="cardusuario-container">
            <img src={ props.imagem } />
            <div className='container'>
                <h3>{ props.usuario }</h3>
                <p>{ props.mensagem }</p>
            </div>
        </div>
        
    )
}

export default CardUsuario;