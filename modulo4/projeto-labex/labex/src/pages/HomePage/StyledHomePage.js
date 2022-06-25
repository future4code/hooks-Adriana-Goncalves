import styled from "styled-components";

export const StyledContainerGeral = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-evenly;
    background-color: #d4aeff;
`;

export const StyledImg = styled.img`
     width:400px
`;

export const StyledText = styled.h2`
     color:#A06AB4;
     font-weight: bold;
     padding-bottom:20px;
     padding-top:10px;
`;

export const StyledButton = styled.button`

align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: 10px 8px  black;
  &:hover {
  box-shadow: 0px 0px;
  transition: 0.25s;
}
    `
