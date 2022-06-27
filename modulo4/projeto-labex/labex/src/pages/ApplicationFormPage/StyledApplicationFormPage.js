import styled from "styled-components";

export const StyledContainerForms = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #8d6e9d;
` 

export const StyledForm = styled.form`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
   
`
export const StyledInput = styled.input`
     padding: 4px;
     font-size: 14px;
     border-width: 0px;
     border-color: #f8a06a;
     color: black;
     border-style: solid;
     border-radius: 8px;
     box-shadow: -1px 0px 5px rgba(248,160,106,.33);
     text-shadow: -14px 0px 6px rgba(66,66,66,.75);

`
export const StyledMidForm = styled.form`
    height: 50vh;
    width: 40vw;
    display:flex;
    flex-direction:column;
    gap:4px;
    padding:10px;
    background-color:white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }  
`
export const StyledGeneral = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;

`