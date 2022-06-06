import { createGlobalStyle } from "styled-components";
import img from "../img/fundo.jpg"

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
    background-color: white;
    animation:dayToNight 10s infinite 15s;
}
button{
    cursor: pointer;
}
`;