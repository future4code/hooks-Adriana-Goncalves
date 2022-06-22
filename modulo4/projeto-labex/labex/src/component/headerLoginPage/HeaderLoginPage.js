import React from "react";
import {goToHomePage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import {StyledGeneralContainer, StlydButtonContainer, StlydButtonLogin} from "./StyledHeaderLoginPage";


const HeaderLoginPage = () => {

    const navigate = useNavigate()
    return (
        <StyledGeneralContainer>
            <div>
                <p>LabeX</p>
            </div>
            <StlydButtonContainer>
                <StlydButtonLogin onClick={() => goToHomePage(navigate)}>Home</StlydButtonLogin>
            </StlydButtonContainer>
        </StyledGeneralContainer>

    );
}

export default HeaderLoginPage;