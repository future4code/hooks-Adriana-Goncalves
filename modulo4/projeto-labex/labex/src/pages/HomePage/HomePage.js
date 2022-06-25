import React from "react";
import Header from "../../component/header/Header";
import {goToListTripsPage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";
import Footer from "../../component/footer/Footer"
import astronauta from "../../img/astronauta2.png"

import {
    StyledContainerGeral,
     StyledImg,
     StyledButton, 
     StyledText
    } from "./StyledHomePage";

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header/>
            <StyledContainerGeral>
                <div>
                    <h1> Ao infinito ... e além! </h1>
                    < StyledText>Encontre as melhores viagens</StyledText>
                    <StyledButton  onClick={()=> goToListTripsPage(navigate)}>Ver lista de Viagens</StyledButton >
                </div>
                <div>
                    <StyledImg src={astronauta}/>
                </div>
            </StyledContainerGeral>
            <Footer/>
        </div>
    )
};

export default HomePage;