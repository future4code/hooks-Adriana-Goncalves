import React from "react";
import axios from "axios";

const urlUsuarios =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks"
  }
};




class Tela1 extends  React.Component{
    state = {
        nome: "",
        email: "",
    }

    createUser = () => {
        const body = {
          name: this.state.nome, 
          email: this.state.email
        };
      
        axios
          .post(urlUsuarios, body, headers)
          .then((res) => {
            alert("Usúario criado com sucesso");
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      };


    onChangeNome= (event) =>{
        this.setState({nome: event.target.value})
    }

    onChangeEmail= (event) =>{
        this.setState({email: event.target.value})
    }

    render(){
        return(
            <div>
               <input
               onChange={this.onChangeNome}
               value={this.state.nome}
               placeholder="nome"
               />

               <input
               onChange={this.onChangeEmail}
               value={this.state.email}
               placeholder="email"
               />
               <button onClick={this.createUser}> Criar Usúario </button>

            </div>

        )
    }
}

export default Tela1