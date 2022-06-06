import React, {useEffect, useState} from "react";
import axios from "axios";

//Stled
import {StyledContainerImg, StyledContainerPerfil } from "./StyledTelaInicial";


import { FcDislike, FcLike } from "react-icons/fc";

const urlProfileToChoose = 
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/xablau"

const headers = {
    headers: {
      Authorization: "adriane-almeida-hooks"
    }
  };

const TelaInicial = () => {
    const [profile, setProfile ] = useState ([])

    useEffect (() => {
        getProfileToChoose()

    }, [])

    const getProfileToChoose = () => {
        axios
          .get(`${urlProfileToChoose}/person`, headers)
          .then((response) => {
              console.log(response)
            setProfile(response.data.profile);
          })

          .catch((error) => {
            // Para pegar os detalhes do erro, usamos error.response
            console.log(error);
          });
      };

      const onClickChoosePerson = (id, choice) => {
        const body = {
            id: id,
	          choice: choice
        };
        axios // faz uma requisição na API
          .post(`${urlProfileToChoose}/choose-person`, body, headers)
          .then((response) => {
            console.log(response)
            getProfileToChoose() // chamando a função ela chama um novo perfil
            
          })

          .catch((error) => {
            // Para pegar os detalhes do erro, usamos error.response
            console.log(error);
          });
      
      };

     

return(
        <StyledContainerPerfil>
          
  
            <StyledContainerImg src={profile.photo}/>
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>
            <div>
                <button 
                onClick={() => onClickChoosePerson(profile.id, true)}
                ><FcLike/>
                </button>

                <button 
                onClick={() => onClickChoosePerson (profile.id, false)}
                ><FcDislike/>
                </button>
            </div>
            
        </StyledContainerPerfil>

    )
}
export default TelaInicial