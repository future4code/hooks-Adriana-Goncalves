import React from "react";
import Header from "../../component/Header/Header";
import Coordinator from "../../coordinator/Coordinator";
import {goToLoginPage} from "../../coordinator/Coordinator";
import {
    StyledContainerGeral,
     StyledImg,
    } from "./StyledHomePage";

const HomePage = () => {

    


    return (
        <div>
            <Header/>
            <StyledContainerGeral>
                <div>
                    <h1> Ao infinito ... e além! </h1>
                    <p>Encontre as melhores viagens</p>
                    <button>Ver lista de Viagens</button>
                </div>
                <div>
                    <StyledImg src="https://img.freepik.com/vetores-gratis/astronauta-bonito-flutuando-com-balao-do-planeta-no-espaco-dos-desenhos-animados-vector-icon-ilustracao-conceito-de-icone-de-ciencia-de-tecnologia-isolado-vetor-premium-estilo-flat-cartoon_138676-3850.jpg?w=740&t=st=1655496810~exp=1655497410~hmac=5f8b901e89003f1010ff2b5ccf03a8d70bfb8b860cea624520399fe03ae85de0"/>
                </div>
            </StyledContainerGeral>
        </div>
    )
};

export default HomePage;