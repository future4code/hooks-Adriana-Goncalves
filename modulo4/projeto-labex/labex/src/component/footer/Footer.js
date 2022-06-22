import React from "react";
import {StyledGeneralContainer, StyledSocialNetworksContainer, StyledContactsContainer} from "./StyledFooter"

const Footer = () => {

    return (
       <StyledGeneralContainer>
        <StyledContactsContainer>
            <div>
            <p>email</p>
            </div>
            <div>
            <p>Telefone</p>
            </div>
        </StyledContactsContainer>

        <StyledSocialNetworksContainer>
            <p>twitter</p>
            <p>facebook</p>
            <p>instagram</p>
        </StyledSocialNetworksContainer>
        <p> @Labenu |Adriane Almeida Gonçalves</p>
       </StyledGeneralContainer>
    );
}

export default Footer;