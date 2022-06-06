
import TelaInicial from './component/TelaInicial/TelaInicial';
import StyledGlobal from './styleGlobal/StyledGlobal';
import {StyledContainer} from './StyledApp';
import TelaDeMatches from './component/TelaDeMatches/TelaDeMatches';
import { useState } from 'react';

const App = () => {
  const [tela, setTela ] = useState (true)

  const irParaProximaEtapa =() =>{
    setTela(!tela)
  }
  const renderizaEtapa = ()=>{
    switch(tela){
      case  true:
        return <TelaInicial/>
      case false:
        return <TelaDeMatches/>
  
    }
  }


  return (
    <StyledContainer>

      <StyledGlobal/>

      <button onClick={irParaProximaEtapa}>Lista de Macthes</button>
      {renderizaEtapa()}
      
      
    </StyledContainer>
  );
}

export default App
