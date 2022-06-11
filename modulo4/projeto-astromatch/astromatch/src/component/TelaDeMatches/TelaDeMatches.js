import React, {useEffect, useState} from "react";
import axios from "axios";
import { StyledContainerImg, StyledContainer, StyledButton, StyledCard } from "./StyledTelaDeMatches";



const urlGetMatches = 
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adriane-goncalves/matches"

const headers = {
    headers: {
      Authorization: "adriane-almeida-hooks"
    }
};

const TelaDeMatches = (props) => {
    const [ListaMatches, setListaProfile ] = useState ([])


    useEffect (() =>{
        ListaProfile();
    }, []); 


    const ListaProfile = () => {
        axios
          .get(urlGetMatches, headers)
          .then(response => {
            // guarda as infos do pokemon no estado
            console.log(response)
           setListaProfile( response.data.matches );
          })
          .catch(err => {
            console.log(err);
          });
      };

      return(
          <StyledCard>
              {ListaMatches.map(profile => {
                  return (
                    
                    <StyledContainer key={profile.id}>
                      <StyledContainerImg src={profile.photo}/>
                      <p>{profile.name}</p>
                    </StyledContainer>
                  )
              })}
              <div>
                <StyledButton onClick={() => props.irParaProximaEtapa()} >Voltar</StyledButton>
              </div>
          </StyledCard>
      )


}
export default TelaDeMatches;
