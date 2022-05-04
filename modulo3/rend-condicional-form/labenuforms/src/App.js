import React from 'react';
import './App.css';
//COMPONENTES 
import Etapa1 from './componentes/etapa1/Etapa1';
import Etapa2 from './componentes/etapa2/Etapa2';
import Etapa3 from './componentes/etapa3/Etapa3';
import Etapa4 from './componentes/etapa4/Etapa4';

class App extends React.Component {
  state ={
    etapa : 1,
  }
  irParaProximaEtapa =() =>{
    this.setState({etapa: this.state.etapa+1})
    this.renderizaEtapa()
  }

  renderizaEtapa = ()=>{
    switch(this.state.etapa){
      case  1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Etapa4/>
      default: 
        return <Etapa4/>
    }

  }
  render (){
    return (
      <div className="App">
        {this.renderizaEtapa()}
        {this.state.etapa!== 4 &&(
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        )}
        
      </div>
    )
  }
}

export default App;
