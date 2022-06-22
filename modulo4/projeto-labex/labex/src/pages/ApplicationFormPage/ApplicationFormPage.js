import React from "react";
import Footer from "../../component/footer/Footer";
import HeaderApplicationFormPage from"../../component/headerApplicationFormPage/HeaderApplicationFormPage"


const ApplicationFormPage = () => {
    return (
        <div>
            <HeaderApplicationFormPage/>
          
            <div>
                <label>
                    <select placeholder="Escolha uma Viagem">
                        <option value="Ensino médio incompleto">Inverno em Vênus</option>
                        <option value="Ensino médio incompleto">Astro</option>
                        <option value="Ensino médio incompleto">Missão Saturno</option>
                        <option value="Ensino médio incompleto">EEnsino Superior completo</option>
                    </select>
                </label>

                <label>
                    <input placeholder="Nome" value="" />
                </label>

                <label>
                    <input  value="" />
                </label>

                <label>
                    <input placeholder="Textode Candidatura" value="" />
                </label>
                <label>
                    <input placeholder="Profissão" value="" />
                </label>
            </div>

            <Footer/>
        </div>
    )
};

export default ApplicationFormPage;