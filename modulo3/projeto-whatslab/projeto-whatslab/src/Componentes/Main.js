import CardUsuario from "./usuario/CardUsuario";
import mae from "../img/mae.jpg";
import perfil from "../img/perfilusuario.png";
import status from "../img/status.png";
import mensagem from "../img/mensagem.png";
import pontos from "../img/tres-pontos.png";
import lupa from "../img/lupa.png";
import enviar from "../img/enviar-mensagem.png";
import avatar1 from "../img/avatar-de-perfil.png";
import avatar2 from "../img/avatar.png";
import avatar3 from "../img/mulher.png";
import avatar4 from "../img/garoto.png";
import avatar5 from "../img/avatar5.png";
import avatar6 from "../img/avatar6.png";
import avatar7 from "../img/garoto7.png";
import avatar8 from "../img/cara-feliz.png";
import avatar9 from "../img/avatar9.png";
import avatar10 from "../img/avatar10.png";

import React from "react";


export class Main extends React.Component {
  state = {
    dados: [{ usuario: "", mensagem: "" }],
    usuario: "",
    mensagem: "",
  };

  recebeUsuario(event) {
    this.setState({ usuario: event.target.value });
  }
  recebeMensagem(event) {
    this.setState({ mensagem: event.target.value });
  }

  enviaDados() {
    const novosDados = [
      ...this.state.dados,
      { usuario: this.state.usuario, mensagem: this.state.usuario },
    ];
    this.setState({ dados: novosDados, usuario: "", mensagem:""});
  }

  render() {
      const dadosComponentes= this.state.dados.map( (dado)=> {
          return (
              <div className="textos-mensagens">
              <h4>{dado.usuario}</h4>
              <p> {dado.mensagem}</p>
              </div>
          )
      }
      )
    return (
      <div className="App">
        
          <div className="container-contatos">
            <header>
                <img className="perfil" src={perfil}/>
                <div className="bnt-header">
                  <div>
                    <img  className="icones" src={status}/>
                  </div>
                  <div>
                    <img  className="icones" src={mensagem}/>
                  </div>
                  <div>
                    <img  className="pontos" src={pontos}/>
                  </div>
                </div>
            </header>

            <div className="container-pesquisar">
              <div className="pesquisar">
                <img  className="icones-lupa" src={lupa}/>
                <input type="text" placeholder="Pesquisar ou começar uma nova conversa"/>
              </div>
            </div>

            <div>
              <CardUsuario imagem={avatar2} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={avatar3} usuario="Anna" mensagem="Me liga mais tarde" />
              <CardUsuario imagem={avatar4} usuario="Pai" mensagem="Oi, filha" />
              <CardUsuario imagem={avatar5} usuario="Flavia" mensagem="Certo, obrigada!" />
              <CardUsuario imagem={avatar6} usuario="Aline" mensagem="ok :)" />
              <CardUsuario imagem={avatar7} usuario="Mark" mensagem="Reunião no dia 5 de maio" />
              <CardUsuario imagem={avatar8} usuario="Pedro" mensagem="Me manda msg quando chegar" />
              <CardUsuario imagem={avatar9} usuario="Andreia" mensagem="Oi, onde você está ?" />
              <CardUsuario imagem={avatar10} usuario="Helena" mensagem="Vamos tomar café no fds ?" />
              
            </div>
          </div>

          <div className="container-conteudo">
            <div className="container-usuario">
              <span>
                <img  className="icones" src={avatar1}/>
              </span>
              <div>
                <span>
                  <img  className="icones" src={lupa}/>
                </span>
                <span>
                  <img  className="icones" src={pontos}/>
                </span>
              </div>
            </div>
            
            <div className="container-texto">
              {dadosComponentes}
            </div>

            <div className="rodape">
                <input
                  className="bnt-usuario"
                  type="text"
                  value={this.state.usuario}
                  placeholder="Usúario"
                  onChange={(event) => this.recebeUsuario(event)}
                />

                <input
                className="bnt-mensagem"
                  type="text"
                  value={this.state.mensagem}
                  placeholder="Mensagem"
                  onChange={(event) => this.recebeMensagem(event)}
                />
                <button  src= {enviar} onClick={() => this.enviaDados()}>Enviar</button>
            </div>
          </div>
        
      </div>
    );
  }
}
