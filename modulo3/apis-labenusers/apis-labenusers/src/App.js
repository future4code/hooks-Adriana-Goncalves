import React from 'react';
import Tela1 from './componentes/Tela1';
import Tela2 from './componentes/Tela2';
//COMPONENTES 


class App extends React.Component {
  state ={
    tela : true,
  }
  irParaProximaEtapa =() =>{
    this.setState({ tela: !this.state.tela });
  }

  renderizaEtapa = ()=>{
    switch(this.state.tela){
      case  true:
        return <Tela1/>
      case false:
        return <Tela2/>
    }

  }
  render (){
    return (
      <div >
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        
      </div>
    )
  }
}

export default App;