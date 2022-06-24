import React,{useState, useEffect} from "react";
import Footer from "../../component/footer/Footer";
import HeaderApplicationFormPage from"../../component/headerApplicationFormPage/HeaderApplicationFormPage"
import axios from "axios";


const ApplicationFormPage = () => {
    const [countries, setCountries] = useState([]);


    const getCountries = () => {
        axios
          .get(
            "https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome"
          )
          .then((res) => {
            console.log(res);
            setCountries(res.data);
          });
      };
    
      useEffect(() => {
        getCountries();
      }, []);


    return (
        <div>
            <HeaderApplicationFormPage/>
            <div>
                <form>
                    <label></label>
                    <select placeholder="Escolha uma Viagem" required>
                        <option value="">Inverno em Vênus</option>
                        <option value="">Astro</option>
                        <option value="">Missão Saturno</option>
                        <option value="">Mulheres são de Vênus</option>
                        <option value="">Rolezinho</option>
                        <option value="">Lua de mel em jupiter</option>
                        <option value="">Rambo</option>
                    </select>
                    <label>Nome:</label>
                    <input 
                    placeholder="Nome" 
                    value="" 
                    required
                    />
                    <label>Idade:</label>
                    <input 
                    placeholder="idade"
                    value=""
                    type="number"
                    required
                    min="18"
                    />
                    <label>Texto de Candidatura:</label>
                    <input
                    placeholder="Texto de Candidatura"
                    value=""
                    required
                     />
                    <label>Profissão:</label>
                    <input 
                    placeholder="Profissão" 
                    value=""
                    required
                
                    />
                    <select required>
                        {countries.map((country, index) => {
                        return (
                            <option key={index} value={country.nome}>
                            {country.nome}
                            </option>
                        );
                        })}
                    </select>

                    <button>Enviar</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
};

export default ApplicationFormPage;