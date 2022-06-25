import styled from "styled-components";

export const StyledContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #8d6e9d;
`;

export const StyledImg = styled.img`
  width: 400px;
`;

export const StyledText = styled.h2`
  color: white;
  font-weight: bold;
  padding-bottom: 20px;
  padding-top: 10px;
  font-family: "Inconsolata", monospace;
`;
export const StyledTextH = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 40px;
`;

export const StyledButton = styled.button`
  align-items: center;
  background-color: #f8a06a;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  display: flex;
  font-family: Inter, sans-serif;
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
  box-shadow: 10px 8px black;
  width: 300px;
  &:hover {
    box-shadow: 0px 0px;
    transition: 0.25s;
  }
`;
