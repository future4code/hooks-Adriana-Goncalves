import React from "react";
import {goToLoginPage, goToHomePage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import {StyledGeneralContainer, StlydButtonContainer} from "./StyledHeaderApplicationFormPage";


const HeaderApplicationFormPage = () => {

    const navigate = useNavigate()
    return (
        <StyledGeneralContainer>
            <div>
                <p>Logo</p>
            </div>
            <StlydButtonContainer>
                <button onClick={()=> goToHomePage(navigate)}>Homer</button>

                <button>lista de viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Login</button>
                <button>Logout</button>
            </StlydButtonContainer>
        </StyledGeneralContainer>

    );
}

export default HeaderApplicationFormPage;