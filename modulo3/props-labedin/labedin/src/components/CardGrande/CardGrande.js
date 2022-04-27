import React from 'react';
import { StyledBigCardContainer, StyledBigCardContainerDivInterna, StyledBigCardContainerH4, StyledBigCardContainerImg} from './CardGrandeStyle'

function CardGrande(props) {
    return (
        <StyledBigCardContainer>
            <StyledBigCardContainerImg src={ props.imagem } />
            <StyledBigCardContainerDivInterna>
                <StyledBigCardContainerH4>{ props.nome }</StyledBigCardContainerH4>
                <p>{ props.descricao }</p>
            </StyledBigCardContainerDivInterna>
        </StyledBigCardContainer>
    )
}

export default CardGrande;