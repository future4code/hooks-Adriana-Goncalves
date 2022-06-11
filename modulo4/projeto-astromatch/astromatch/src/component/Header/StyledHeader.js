import styled from 'styled-components';

export const StyledHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const StyledButton = styled.div`
display:flex;
flex-direction: row;
margin-top:10px;
margin-bottom:15px;



`;
export const StyledTitulo = styled.div`
display: flex;
align-items:center;
justify-content: center;
margin-top: 10px;
margin-bottom: 5px;

`;
export const StyledB = styled.button`
 outline:none; 
 border: none;
 background:none;
`;
export const StyledCorlorTitulo = styled.span`
 color: red;
`;
export const StyledFonte = styled.div`
 @import url("https://fonts.google.com//css2?family=Styles&display=swap");

 & h1 {
     font-family: "Styles"
 }
`;