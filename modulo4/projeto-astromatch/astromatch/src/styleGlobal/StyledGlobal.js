import { createGlobalStyle } from "styled-components";
import fundo from '../img/fundo.jpg'


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
    background-image: url(${fundo});
    
}

button{
    cursor: pointer;
}

`;