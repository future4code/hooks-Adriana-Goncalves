import React from "react";
import {goToLoginPage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import {StyledGeneralContainer, StlydButtonContainer, StlydButtonLogin, StlydLogo, StyledTitle, StyledSpan } from "./StyledHeader";
import { AiOutlineRocket } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BiPlanet } from "react-icons/bi";


const Header = () => {

    const navigate = useNavigate()
    return (
        <StyledGeneralContainer>
            <StlydLogo>
                <div>
                    <IconContext.Provider value={{ size: "2.5em", color:"white" } }>
                        <AiOutlineRocket />
                    </IconContext.Provider>
                </div>
                <StyledTitle>Labe<StyledSpan>X</StyledSpan></StyledTitle>
            </StlydLogo>
            <StlydButtonContainer>
                <StlydButtonLogin onClick={() => goToLoginPage(navigate)}>
                    <div>
                        <BiPlanet/>
                    </div>
                    Login
                </StlydButtonLogin>
            </StlydButtonContainer>
        </StyledGeneralContainer>

    );
}

export default Header;