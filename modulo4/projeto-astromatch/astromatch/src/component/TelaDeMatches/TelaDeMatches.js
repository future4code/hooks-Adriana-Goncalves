import React, {useEffect, useState} from "react";
import axios from "axios";
import { StyledContainerImg } from "./StyledTelaDeMatches";



const urlGetMatches = 
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/xablau/matches"

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
          <div>
              {ListaMatches.map(profile => {
                  return (
                      <div key={profile.id}>
                        <p>{profile.name}</p>
                        <StyledContainerImg src={profile.photo}/>
                      </div>
                  )
              })}
          
          </div>
      )


}
export default TelaDeMatches;
