import React from 'react';
import { StyledSmallCardContainer, StyledSmallCardContainerImg, StyledSmallCardContainerDivInterna, StyledSmallCardContainerP } from './CardPequenoStyle'

function CardPequeno (props) {
    return (
        <StyledSmallCardContainer>
            <StyledSmallCardContainerImg src={ props.imagem } />
            <StyledSmallCardContainerDivInterna>
                <h4> {props.dado} </h4>
                <StyledSmallCardContainerP> {props.descricao} </StyledSmallCardContainerP>
            </StyledSmallCardContainerDivInterna>
        </StyledSmallCardContainer>
    )
}

export default CardPequeno;