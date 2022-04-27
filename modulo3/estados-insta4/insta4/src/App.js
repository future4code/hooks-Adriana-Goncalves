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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={paulinha}
          fotoPost={ post1}
        />

        <Post
          nomeUsuario={'amanda'}
          fotoUsuario={amanda}
          fotoPost={post2}
        />

        <Post
          nomeUsuario={'pietra'}
          fotoUsuario={pietra}
          fotoPost={post3}
        />
      </MainContainer>
    );
    
  }
}

export default App;
