import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import {StylesCardDetalhes, StylesDetalhes, StylesDetalhesMusica } from "./StyledDetalhesPlaylist"
const urlCreatePlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};

class DetalhesPlaylist extends React.Component {
  state = {
    tracks: [],
    playlistId: "",
  };

  componentDidMount = () => {
    if (this.props.playlistId != this.state.playlistId) {
      this.setState({ playlistId: this.props.playlistId });
      this.getPlaylistTracks(this.props.playlistId);
    }
  };

  getPlaylistTracks = (playlistId) => {
    axios
      .get(`${urlCreatePlaylist}/${playlistId}/tracks`, headers)
      .then((response) => {
        console.log(response);
        this.setState({ tracks: response.data.result.tracks });
      })
      .catch((error) => {
        // Para pegar os detalhes do erro, usamos error.response
        console.log(error);
      });
  };

  render() {
    return (
      <StylesCardDetalhes>
        {this.state.tracks.map((track) => {
          return (
            <StylesDetalhes key={track.id}>
              <StylesDetalhesMusica>{track.artist}</StylesDetalhesMusica>
              <StylesDetalhesMusica>{track.name}</StylesDetalhesMusica>
              <ReactPlayer
              url = {track.url}
              height="50px"
              playing={false}
              controls={true}
              />
            </StylesDetalhes>
          );
        })}
      </StylesCardDetalhes>
      
    );
  }
}
export default DetalhesPlaylist;
