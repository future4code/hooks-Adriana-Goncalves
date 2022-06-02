import { createGlobalStyle } from "styled-components";
import img from "../img/fundo.jpg"

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    color: white;
    background-image: url(${img})
}
body, input, button {
    font: 14px Roboto, sans-serif;
}
button{
    cursor: pointer;
}
`;