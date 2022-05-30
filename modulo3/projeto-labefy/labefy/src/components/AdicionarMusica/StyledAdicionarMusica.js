import styled from "styled-components";


export const StylesAdicionaInput= styled.input`
    font-size: 16px;
    width: 300px;
    height: 40px;
    background-color: white;
    color: black;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 10px;
`;
export const StylesAdicionaCard= styled.div`
    display:flex;
    flex-direction: column;
    margin: 2px 0 2px 1em;

`;
export const StylesAdicionaGeral= styled.div`
    border: 1px solid white;
    

`;
export const StylesDetalhesTitulo= styled.h2`
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items:center;
    text-align:center;
    margin: 10px 0 10px 1em;

`;
export const StylesAdicionaButton= styled.div`
  background-color: #fbeee0;
  border: 2px solid rgba(240, 46, 170, 0.4);
  border-radius: 30px;
  box-shadow: rgba(240, 46, 170, 0.4) 4px 4px 0 0;
  color: black;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 10px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 2px 0px 20px 1em;

 &:hover {
  background-color: #fff;
}

&:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

`;

