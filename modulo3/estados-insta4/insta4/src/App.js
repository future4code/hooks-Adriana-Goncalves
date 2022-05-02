import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import paulinha from './img/fotoperfil1.jpg';
import amanda from './img/fotoperfil2.jpg';
import pietra from './img/fotoperfil3.jpg';
import post1 from './img/fotopost1.jpg';
import post2 from './img/fotopost2.jpg';
import post3 from './img/fotopost3.jpg';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state ={
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: paulinha,
        fotoPost:  post1,
      },

      {
        nomeUsuario: "Amanda",
        fotoUsuario: amanda,
        fotoPost:  post2,
      },

      {
        nomeUsuario: "Pietra",
        fotoUsuario: pietra,
        fotoPost: post3,
      },
    ],
    nomeUsuario: "",
    fotoUsuario:" ",
    fotoPost: " ",
  };

  
  onChangeNome(ev) {
    this.setState({ nomeUsuario: ev.target.value });
  }

  onChangeIdade(ev) {
    this.setState({ fotoUsuario: ev.target.value });
  }
  onChangeIdade(ev) {
    this.setState({ fotoPost: ev.target.value });
  }

  onClickAdicionar() {
    const novaArrayPessoas = [
      ...this.state.posts,
      {
        nomeUsuario: this.state.nomeUsuario,
        fotoUsuario: this.state.fotoUsuario,
        fotoPost: this.state.fotoPost,
      },
    ];
    this.setState({ posts: novaArrayPessoas, nomeUsuario: "", fotoUsuario: "", fotoPost:" " });
  }


  render() {
    return (
      <MainContainer>
        {this.state.posts.map(( post) => {
          return(
            <Post
                nomeUsuario={post.nomeUsuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={ post.fotoPost}
            />
          );
        })}

        <div className='container-forms'>

          <input
            value={this.state.nomeUsuario}
            onChange={this.onChangeNome.bind(this)}
            placeholder="nome"
          />

          <input
            value={this.state.fotoUsuario}
            onChange={(ev) => this.onChangeFotoUsuariobind(ev)}
            placeholder="foto do usuario"
            type="text"
          />

           <input
            value={this.state.fotoPost}
            onChange={(ev) => this.onChangeFotoPost(ev)}
            placeholder="foto do post"
            type="text"
          />
           <button onClick={() => this.onClickAdicionar()}>Adicionar</button>

        </div>
      </MainContainer> 
    );
    
  }
}

export default App;
