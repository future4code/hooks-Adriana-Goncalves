import styled from 'styled-components';

export const StyledContainerImg = styled.img`
    width:50px;
    height:50px;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 15px
`;
export const StyledContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-left:30px;
    margin-bottom:30px;
    width:500px
    
`;

export const StyledButton = styled.button`
   background:none;
   margin-bottom:20px;
   margin-left:30px;
   border-radius: 10px;
   width:70px;
   height:30px;
   background-color: red;
   color: white;
   border-color:black;
   font-weight: bold;
   font-size:16px;
   outline-style: none;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover{
    box-shadow: 0 0 10px 0 #F2958D inset, 0 0 10px 4px #D9072D;
  }
   
   
`;
export const StyledCard = styled.div`
  background-color:white;
  height:600px;

`;
export const StyledCardMatch = styled.div`
  background-color:white;
  height:600px;
  overflow-y: scroll;

`;