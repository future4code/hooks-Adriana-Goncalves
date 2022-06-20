import React from "react";
import {goToLoginPage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import {StyledGeneralContainer, StlydButtonContainer} from "./StyledHeader";


const Header = () => {

    const navigate = useNavigate()
    return (
        <StyledGeneralContainer>
            <div>
                <p>Logo</p>
            </div>
            <StlydButtonContainer>
                <button onClick={() => goToLoginPage(navigate)}>Login</button>
                <button>Logout</button>
            </StlydButtonContainer>
        </StyledGeneralContainer>

    );
}

export default Header;