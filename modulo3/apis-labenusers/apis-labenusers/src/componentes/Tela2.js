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
        usuarios: [] 
    }

    componentDidMount =()=>{
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
        .get(urlUsuarios, headers)
        .then((response) => {
            this.setState({usuarios: response.data})
        })
        .catch((error) => {
            // Para pegar os detalhes do erro, usamos error.response
            console.log(error);
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
                {this.state.usuarios.map((usuario) => {
                    return (
                        <p>
                            {usuario.name}
                        </p>
                        
                    )
                }
                
                )}

               <input
               onChange={this.onChangeEmail}
               value={this.state.email}
               placeholder="Nome exato para busca"
               />
               <button>Salvar edição</button>

            </div>

        )
    }
}

export default Tela1