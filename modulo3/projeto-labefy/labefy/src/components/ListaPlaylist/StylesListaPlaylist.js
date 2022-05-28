import styled from "styled-components";

export const StylesCardContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 100px 100px;
    justify-content: stretch;
    width: 500px ;

`;
export const StylesCard= styled.div`
    display:flex;
    flex-direction: column;
    width: 200px ;
    height: 200px;
    background-color: #333333;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    align-items: center;
    

`;
export const StylesButtonDelete= styled.button`
    background-color: #f44336;;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    width:100px;

`;
export const StylesButtonDetalhes= styled.button`
    background-color: #f44336;;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;

`;
export const StyledNome= styled.p`
    display:flex;
    width: 200px;
    height:50px;
    text-align: center;
    justify-content:center;
    align-items:center;

`;
