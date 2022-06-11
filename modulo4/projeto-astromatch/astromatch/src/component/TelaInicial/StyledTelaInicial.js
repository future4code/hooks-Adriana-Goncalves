import styled from 'styled-components';


export const StyledContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

export const StyledContainerImg = styled.img`
   width:70%;
   height:500px;
   box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
   margin-bottom:10px;
 
`;
export const StyledContainerBio = styled.p`
   color:#8E8B8E;
   
`;
export const StyledContainerName = styled.p`
   font-weight: bold;
   font-size: 20px;
   margin-bottom:5px
`;

export const StyledContainerNameCard = styled.p`
   display:flex;
   flex-direction: row;
   width: 500px;
   
`;
export const StyledContainerCard = styled.div`
   display:flex;
   flex-direction:column;
   width:500px;
   margin-left:140px;
   margin-top:10px;
   margin-bottom:10px;
   padding-left: 4px;
  padding-right: 143px;

`;

export const StyledButtonPerfil = styled.button`
   outline:none; 
   border: none;
   background:none;
   margin-left:40px;
`;
export const StyledButtonCard = styled.div`
   display:flex;
   align-items: center;
   margin-bottom:20px;
   justify-items: end;
  
`;