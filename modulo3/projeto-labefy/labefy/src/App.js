import React from "react";

//componentes
import CriaPlaylist from "./components/CriaPlaylist/CriaPlaylist";
import ListaPlaylist from "./components/ListaPlaylist/ListaPlaylist";
// Styled
import StylesGlobal from "./styles/StylesGlobal";
import {
  StylesGeralContainer,
  StylesPageContainer,
  StylesImg,
  StylesLayout,
  StylesTitulo,
  StylesNavegaTitulo,
  StylesNTitulo
} from "./StylesApp";
// Imagens
import logo from "./img/logo.png";

class App extends React.Component  { 
  state = {
    atualiza: false
  }

  handleCallback = () =>{
    this.setState({atualiza: true});
  }
  // executando aquii 
  
  render() {
    return (
      <StylesGeralContainer>
        <StylesPageContainer>
          <StylesLayout>
            <StylesImg src={logo} />
            <StylesTitulo>Labefy</StylesTitulo>
          </StylesLayout>
  
          <CriaPlaylist parentCallback = {this.handleCallback}/>
          {/*filho recebe a função de retorno do pai*/}
  
        </StylesPageContainer>
        <div>
          <StylesNTitulo>
            <StylesNavegaTitulo>Navegue em suas Playlits</StylesNavegaTitulo>
          </StylesNTitulo>
          <ListaPlaylist />
        </div>
  
        <StylesGlobal />
     
      </StylesGeralContainer>
    );

  }
}

export default App;
