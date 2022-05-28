import React from "react";
import axios from "axios";
import {StylesCriaPlaylistContainer, StylesCriaTitulo, StylesCriaInput, StylesCriaButton, StylesCriaContainer} from "./StylesCriaPlaylist"

const urlCreatePlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks"
  }
};



class CriaPlaylist extends React.Component {
    state= {
        nome: ""
    }

    createPlaylist= () => {
        const body = {
          name: this.state.nome
        };

        axios
        .post(urlCreatePlaylist, body, headers)
        .then((res) => {
          alert("Playlist com sucesso");
          this.setState ({ nome: ""});
          this.props.parentCallback()
          // chamando a função de retorno que recebeu do pai

        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    };


    onChangeNome= (event) =>{
        this.setState({nome: event.target.value})
    }

    render(){
        return(
            <StylesCriaPlaylistContainer>
                <StylesCriaTitulo>Criar Playlist</StylesCriaTitulo>
                <StylesCriaContainer>
                  <StylesCriaInput
                  onChange={this.onChangeNome}
                  value={this.state.nome}
                  placeholder="Digite o nome da playlist"
                  />
                  <StylesCriaButton onClick={this.createPlaylist}>+</StylesCriaButton>
                </StylesCriaContainer>
                
            </StylesCriaPlaylistContainer>
        )
    }
}

export default CriaPlaylist