import styled from "styled-components";

export const StylesCardContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 100px 100px;
    justify-content: stretch;
    max-width: 500px ;

`;
export const StylesCard= styled.div`
    display:flex;
    flex-direction: column;
    max-width: 400px ;
    align-items: center;
    border: 2px solid white;
    margin: 10px 10px 10px 10px;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
    

`;
export const StylesButtonDelete= styled.button`
    border: none;
    size:100px;
    padding: 5px 10px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom:10px

`;
export const StylesButtonDetalhes= styled.button`
    background-color: rgba(240, 46, 170, 0.4);
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    &:hover {
    background-color: #fff;
    color: black;
}
`;
export const StyledNome= styled.p`
    display:flex;
    width: 200px;
    height:50px;
    text-align: center;
    justify-content:center;
    align-items:center;
    background-color: white;
    color:black;
    font-size: 16px;

`;

export const StylesButtonVoltar= styled.button`
    margin-top: 10px
`;
