import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import img from './img/imagem-perfil.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { StyledPageSectionContainer, StyledApp, StyledH2 } from './AppStyles';
import GlobalStyle from './GlobalStyle';

function App() {

  return (
    <StyledApp>
      <GlobalStyle/>
      <StyledPageSectionContainer>
        <StyledH2>Dados pessoais</StyledH2>
        <CardGrande 
          imagem= {img}
          nome="Adriane Almeida Gonçalves" 
          descricao="Olá, meu nome é Adriane, tenho 24 anos e sou graduanda do curso de Engenharia de Bioprocessos e Biotecnologia na UTFPR-PG.
          Nesse ano de 2022 eu comecei o curso de Web Full Stack naLabenu, as competências abordadas durante o curso são"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </StyledPageSectionContainer>

      <StyledPageSectionContainer>
        <CardPequeno 
          imagem="./img" 
          dado= "Email:" 
          descricao="adrianegonaves@hotmail.com" 
        />
        
        <CardPequeno 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          dado="Endereço:" 
          descricao="Rua Acapuco" 
        />
      </StyledPageSectionContainer>

      <StyledPageSectionContainer>
        <StyledH2>Experiências profissionais</StyledH2>
        <CardGrande 
          imagem="./img" 
          nome="Tribunal Regional Do Trabalho Da 9 Regiao" 
          descricao="Estagiária em Direito" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Florestal Vale do Corisco Ltda" 
          descricao="Jovem Aprendiz" 
        />
      </StyledPageSectionContainer>

      <StyledPageSectionContainer>
        <StyledH2>Minhas redes sociais</StyledH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </StyledPageSectionContainer>
    </StyledApp>
  );
}

export default App;
