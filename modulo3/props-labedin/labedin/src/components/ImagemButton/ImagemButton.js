import React from 'react';
import {StyledImagemButtonContainer, StyledImagemButtonContainerImg} from './ImagemButtonStyle'

function ImagemButton(props) {
    return (
        <StyledImagemButtonContainer>
            <StyledImagemButtonContainerImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </StyledImagemButtonContainer>

    )
}

export default ImagemButton;