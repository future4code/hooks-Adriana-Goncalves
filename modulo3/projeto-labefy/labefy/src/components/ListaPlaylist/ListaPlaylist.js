import React from "react";
import axios from "axios";
import DetalhesPlaylist from "../DetalhesPlaylist/DetalhesPlaylist";
import AdicionarMusica from "../AdicionarMusica/AdicionarMusica";
import {StylesCardContainer, StylesButtonDelete, StyledNome, StylesCard} from "./StylesListaPlaylist"

const urlCreatePlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};

class ListaPlaylist extends React.Component {
  state = {
    playlists: [],
    playlistId: "",
    playlistName: "",
    detalhes: true,
  };


  componentDidMount = () => {
    this.getAllPlaylists();
  };

  componentDidUpdate = () => {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(urlCreatePlaylist, headers)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        // Para pegar os detalhes do erro, usamos error.response
        console.log(error);
      });
  };

  deletePlaylist = (id) => {
    axios
      .delete(`${urlCreatePlaylist}/${id}`, headers)
      .then((response) => {
        this.getAllPlaylists();
        alert("Playlist deleta com sucesso !");
      })
      .catch((error) => {
        console.log(error)
        alert("Algo deu errado !");
      });
  };

  setaPlaylistId = (playlistId, playlistName) => {
    this.setState({ playlistId: playlistId , playlistName: playlistName});
    console.log(this.state, playlistId, playlistName)
  };
  


  render() {
    const listaDePlaylist = this.state.playlists.map((playlist) => {
      return (
        <StylesCard >
          <StyledNome key={playlist.id}>{playlist.name}</StyledNome>

          <StylesButtonDelete onClick={() => this.deletePlaylist(playlist.id)}>
            Delete
          </StylesButtonDelete>
          <button onClick={() => this.setaPlaylistId(playlist.id, playlist.name)}>
            Detalhes
          </button>
        </StylesCard>
      );
    });

    const detalhesDaPlaylist = <div>
      <DetalhesPlaylist playlistId={this.state.playlistId} />
      <AdicionarMusica
        playlistId={this.state.playlistId}
        playlistName={this.state.playlistName}
      />
      <button onClick={() => this.setaPlaylistId("", "")}>Voltar</button>
    </div>

    let conteudo;
    if (this.state.playlistId === ""){
      conteudo = listaDePlaylist;
    }else{
      conteudo = detalhesDaPlaylist;
    }

    return (
      <StylesCardContainer>
        {conteudo}
      </StylesCardContainer>
    );
  }
}

export default ListaPlaylist;
