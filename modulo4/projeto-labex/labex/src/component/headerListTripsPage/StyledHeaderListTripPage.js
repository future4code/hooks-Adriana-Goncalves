import styled from "styled-components";

export const StyledGeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background-color: #8d6e9d;
  border-bottom: 2px solid;
`;
export const StlydButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StlydButton = styled.button`
  min-height: 35px;
  width: 100px;
  border-radius: 30px;
  border: 0px none;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const StlydLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const StyledTitle = styled.h2`
  color: white;
  font-family: "Space Grotesk", sans-serif;
`;

export const StyledSpan = styled.span`
  color: #f8a06a;
  font-family: "Space Grotesk", sans-serif;
  font-size: 29px;
  font-weight: bold;
  font-family: "Rubik Moonrocks", cursive;
`;

export const StyledContainerButton = styled.div`
    display:flex;
    flex-direction:row;
    gap: 14px;

`
