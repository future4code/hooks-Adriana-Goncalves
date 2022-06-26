import React from "react";
import {
  goToLoginPage,
  goToApplicationFormPage,
  goToHomePage,
} from "../../coordinator/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  StyledGeneralContainer,
  StlydButtonContainer,
  StlydButton,
  StlydLogo,
  StyledTitle,
  StyledSpan,
  StyledContainerButton
} from "./StyledHeaderListTripPage";
import { AiOutlineRocket, AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BiPlanet } from "react-icons/bi";

const HeaderListTrips = () => {
  const navigate = useNavigate();
  return (
    <StyledGeneralContainer>
      <StlydLogo>
        <div>
          <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
            <AiOutlineRocket />
          </IconContext.Provider>
        </div>
        <StyledTitle>
          Labe<StyledSpan>X</StyledSpan>
        </StyledTitle>
      </StlydLogo>
      <StyledContainerButton>
        <StlydButton onClick={() => goToHomePage(navigate)}>
            <AiOutlineHome/>
            home</StlydButton>

        <StlydButton onClick={() => goToApplicationFormPage(navigate)}>
          Inscrever
        </StlydButton>
        <StlydButtonContainer>
          <StlydButton onClick={() => goToLoginPage(navigate)}>
            <div>
              <BiPlanet />
            </div>
            Login
          </StlydButton>
        </StlydButtonContainer>
      </StyledContainerButton>
    </StyledGeneralContainer>
  );
};

export default HeaderListTrips;
