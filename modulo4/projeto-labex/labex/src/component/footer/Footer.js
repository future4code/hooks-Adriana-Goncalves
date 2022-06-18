import React from "react";
import {StyledGeneralContainer, StyledSocialNetworksContainer, StyledContactsContainer} from "./StyledFooter"

const Footer = () => {

    return (
       <StyledGeneralContainer>
        <StyledContactsContainer>
            <p>email</p>
            <p>Telefone</p>
        </StyledContactsContainer>
        <StyledSocialNetworksContainer>
            <p>twitter</p>
            <p>facebook</p>
            <p>instagram</p>
        </StyledSocialNetworksContainer>
        <p> @Labenu|Adriane Almeida Gonçalves</p>

       </StyledGeneralContainer>
    );
}

export default Footer;