import React from "react";
import { StyledContainerForms } from './styledEtapa1'

class Etapa1 extends  React.Component{
    render(){
        return(
            <StyledContainerForms>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <label>
                    <h3>1. Qual o seu nome?</h3>
                    <input value="" />
                </label>
                <label>
                    <h3>2. Qual sua idade?</h3>
                    <input value="" />
                </label>
                <label>
                    <h3>3. Qual seu email?</h3>
                    <input value="" />
                </label>
                <label>
                    <h3>4. Qual a sua escolaridade?</h3>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio incompleto">Ensino Médio Completo</option>
                        <option value="Ensino médio incompleto">Ensino Superior Incompleto</option>
                        <option value="Ensino médio incompleto">EEnsino Superior completo</option>
                    </select>
                </label>

            </StyledContainerForms>

        )
    }
}

export default Etapa1