import React from "react";

class Etapa3 extends  React.Component{
    render(){
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <label>
                    <h3>1. Por que você não terminou um curso de graduação?</h3>
                    <input value="" />
                </label>
                
                <label>
                    <h3>8. Você fez algum curso complementar?</h3>
                    <select>
                        <option value="Ensino médio incompleto">Curso técnico</option>
                        <option value="Ensino médio incompleto">Curso de inglês</option>
                        <option value="Ensino médio incompleto">Não fiz curso complementar</option>
                    </select>
                </label>

            </div>

        )
    }
}

export default Etapa3