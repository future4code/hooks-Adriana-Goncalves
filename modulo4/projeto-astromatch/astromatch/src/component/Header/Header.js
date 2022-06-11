import React from "react";
import axios from "axios";
// Styled
import {
  StyledHeader, 
  StyledButton, 
  StyledTitulo, 
  StyledB, 
  StyledCorlorTitulo,
  StyledFonte
} from "./StyledHeader"
// Icones
import { FcLike} from "react-icons/fc";
import { IconContext } from "react-icons";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";



const urlProfileToChoose = 
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adriane-goncalves"

const headers = {
    headers: {
      Authorization: "adriane-almeida-hooks"
    }
  };

const Header = (props) => {
    
    const resetarMatches = () => {
   
        axios // faz uma requisição na API
          .put(`${urlProfileToChoose}/clear`, headers)
          .then((response) => {
            console.log(response)
            
          })
    
          .catch((error) => {
            // Para pegar os detalhes do erro, usamos error.response
            console.log(error);
          });
      
      };

    return (
      <StyledHeader>

          <StyledTitulo>
             <IconContext.Provider value={{ size: "2em" }}>
             <FcLike/>
             </IconContext.Provider>
            

            <h1>Astro<StyledCorlorTitulo>match</StyledCorlorTitulo></h1>
            
          </StyledTitulo>

        <StyledButton>
          
            < StyledB onClick={() => props.irParaProximaEtapa()}>
              <IconContext.Provider value={{ size: "2.3em" }}>
                <AiOutlineUsergroupAdd/>
              </IconContext.Provider>
            </ StyledB>
          
          
            <StyledB onClick={resetarMatches} >
              <IconContext.Provider value={{ size: "2em" }}>
                <GrPowerReset/>
              </IconContext.Provider>
            </StyledB>
          
        </StyledButton>

      </StyledHeader>
    )
  }
  
  export default Header
