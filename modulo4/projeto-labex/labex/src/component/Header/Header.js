import React from "react";
import {goToLoginPage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import {StyledGeneralContainer, StlydButtonContainer, StlydButtonLogin} from "./StyledHeader";
import { IoRocketOutline } from "react-icons/io";


const Header = () => {

    const navigate = useNavigate()
    return (
        <StyledGeneralContainer>
            <div>
                <p>Labe<span>X</span></p>
                <div>
                    <IoRocketOutline/>
                </div>

            </div>
            <StlydButtonContainer>
                <StlydButtonLogin onClick={() => goToLoginPage(navigate)}>Login</StlydButtonLogin>
            </StlydButtonContainer>
        </StyledGeneralContainer>

    );
}

export default Header;