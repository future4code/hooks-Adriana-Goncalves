import React from "react";
import {goToLoginPage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import {StyledGeneralContainer, StlydButtonContainer, StlydButtonLogin} from "./StyledHeader";


const Header = () => {

    const navigate = useNavigate()
    return (
        <StyledGeneralContainer>
            <div>
                <p>Labe<span>X</span></p>
            </div>
            <StlydButtonContainer>
                <StlydButtonLogin onClick={() => goToLoginPage(navigate)}>Login</StlydButtonLogin>
            </StlydButtonContainer>
        </StyledGeneralContainer>

    );
}

export default Header;