import { useState } from 'react';
//Componentes
import TelaInicial from './component/TelaInicial/TelaInicial';
import TelaDeMatches from './component/TelaDeMatches/TelaDeMatches';
import Header from './component/Header/Header';
import Coracao from './component/Coracao/Coracao';
//Styled
import StyledGlobal from './styleGlobal/StyledGlobal';
import {StyledContainer, Styled} from './StyledApp';


const App = () => {
  const [tela, setTela ] = useState (true)
  const [coracao, setCoracao] = useState(true);


  const irParaProximaEtapa =() =>{
    setTela(!tela)
  }
  const renderizaEtapa = ()=>{
    switch(tela){
      case  true:
        return coracao ? <TelaInicial  renderizaCoracao ={renderizaCoracao} /> : <Coracao renderizaCoracao = {renderizaCoracao}/>;
      case false:
        return <TelaDeMatches  irParaProximaEtapa = {irParaProximaEtapa}/>
  
    }
  }

  const renderizaCoracao = () =>{
    setCoracao(!coracao);
  }


  return (
    <Styled>
      <StyledContainer>
        <StyledGlobal/>
        <Header irParaProximaEtapa = {irParaProximaEtapa} />
        {renderizaEtapa()}
      </StyledContainer>
    </Styled>
  );
}

export default App
