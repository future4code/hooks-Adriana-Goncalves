import CardUsuario from "./usuario/CardUsuario";
import mae from "../img/mae.jpg";
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
              <div>
              <h4>{dado.usuario}</h4>
              <p> {dado.mensagem}</p>
              </div>
          )
      }
      )
    return (
      <div className="App">
        
          <div className="container-contatos">
             
            <div>
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Anna" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
              <CardUsuario imagem={mae} usuario="Mãe" mensagem="Oi !!" />
            </div>
          </div>

          <div className="container-conteudo">
            <div className="container-texto">
              {dadosComponentes}
            </div>

            <div className="rodape">
                <input
                  type="text"
                  value={this.state.usuario}
                  placeholder="Usúario"
                  onChange={(event) => this.recebeUsuario(event)}
                />

                <input
                  type="text"
                  value={this.state.mensagem}
                  placeholder="Mensagem"
                  onChange={(event) => this.recebeMensagem(event)}
                />
                <button onClick={() => this.enviaDados()}>Enviar</button>
            </div>
          </div>
        
      </div>
    );
  }
}
