import styled from "styled-components";

export const StyledContainerGeral = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-evenly;
    background-color: #d4aeff;
    height:80vh;
`;

export const StyledImg = styled.img`
     width:400px
`;

export const StyledButton = styled.button`

    align-items: center;
    background-color: #fee6e3;
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
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

   &:after {
    background-color: #111;
    border-radius: 8px;
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform .2s ease-out;
    z-index: -1;
    }

    &:hover:after {
    transform: translate(0, 0);
    }

    &:active {
    background-color: #ffdeda;
    outline: 0;
    }

    &:hover {
    outline: 0;
    } 
    `;