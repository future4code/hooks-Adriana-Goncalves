import React from "react";
import axios from "axios";
import {StylesAdicionaInput,  StylesAdicionaCard} from "./StyledAdicionarMusica"

const urlCreatePlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};

class AdicionarMusica extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
    playlistId: "",
    playlistName: "",
  };
  componentDidMount = () => {
    if (this.props.playlistId != this.state.playlistId) {
      this.setState({
        playlistId: this.props.playlistId,
        playlistName: this.props.playlistName,
      });
    }
  };

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `${urlCreatePlaylist}/${this.state.playlistId}/tracks`,
        body,
        headers
      )
      .then((res) => {
        alert("Musica adicionada com sucesso !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChangeNome = (event) => {
    this.setState({ name: event.target.value });
  };
  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };
  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  };
  render() {
    return (
      <div>
         <h2>Adicionar Música na playlist {this.state.playlistName}</h2>
        < StylesAdicionaCard>
         
          <StylesAdicionaInput
            onChange={this.onChangeNome}
            value={this.state.name}
            placeholder="Digite o nome da musica"
          />
          <StylesAdicionaInput
            onChange={this.onChangeArtist}
            value={this.state.artist}
            placeholder="Digite o nome do artista/banda"
          />
          <StylesAdicionaInput
            onChange={this.onChangeUrl}
            value={this.state.url}
            placeholder="Adicione a URL da música"
          />
          <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>

          
        </ StylesAdicionaCard>
      </div>
    );
  }
}

export default AdicionarMusica;
