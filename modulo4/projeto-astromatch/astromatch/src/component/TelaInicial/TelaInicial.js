import React, { useEffect, useState } from "react";
import axios from "axios";


//Stled
import {
  StyledContainerImg,
  StyledContainerPerfil,
  StyledContainerBio,
  StyledContainerName,
  StyledContainerNameCard,
  StyledContainerCard,
  StyledButtonPerfil1,
  StyledButtonPerfil2,
  StyledButtonCard,
} from "./StyledTelaInicial";

import { FcDislike, FcLike } from "react-icons/fc";
import { IconContext } from "react-icons";

const urlProfileToChoose =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adriane-goncalves";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};

const TelaInicial = (props) => {
  const [profile, setProfile] = useState([]);
  

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(`${urlProfileToChoose}/person`, headers)
      .then((response) => {
        console.log(response);
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
      choice: choice,
    };
    axios // faz uma requisição na API
      .post(`${urlProfileToChoose}/choose-person`, body, headers)
      .then((response) => {
        console.log(response);
        if (response.data.isMatch === true){
          props.renderizaCoracao()
        }
        getProfileToChoose(); // chamando a função ela chama um novo perfil
      })

      .catch((error) => {
        // Para pegar os detalhes do erro, usamos error.response
        console.log(error);
      });
  };


  return (
    <StyledContainerPerfil>
    
      <StyledContainerImg src={profile.photo} />
      <StyledContainerCard>
        <StyledContainerNameCard>
          <StyledContainerName>{profile.name}</StyledContainerName>
          <StyledContainerName>, {profile.age}</StyledContainerName>
        </StyledContainerNameCard>
        <StyledContainerBio>{profile.bio}</StyledContainerBio>
      </StyledContainerCard>

      <StyledButtonCard>

        <StyledButtonPerfil1
          onClick={() => onClickChoosePerson(profile.id, false)}
        >
          <IconContext.Provider value={{ size: "3em" }}>
            <FcDislike />
          </IconContext.Provider>
        </StyledButtonPerfil1>

        <StyledButtonPerfil2
          onClick={() => onClickChoosePerson(profile.id, true)}
        >
          <IconContext.Provider value={{ size: "3em" }}>
            <FcLike />
          </IconContext.Provider>

        </StyledButtonPerfil2>

      </StyledButtonCard>

    </StyledContainerPerfil>
  );
};
export default TelaInicial;
