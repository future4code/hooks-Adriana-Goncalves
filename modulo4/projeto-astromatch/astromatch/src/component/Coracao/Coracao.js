import React from "react";
// Imagens, gif ou video 
import gif from "../../gif/coracao.gif"
// Styld
import {StyledCoracao} from "./StyledCoracao"

const Coracao = (props) => {


    const sumirCoracao = () => {
        props.renderizaCoracao()

    }

    return (
        
        <StyledCoracao onClick={sumirCoracao} src={gif}/>
    )

}
export default Coracao;