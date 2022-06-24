import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    color: black;
    
}
body, input, button {
    font: 14px Roboto, sans-serif; 
    
}
button{
    cursor: pointer;
}
body{
    background-color: #d4aeff;
    height:50px;
}
`;

