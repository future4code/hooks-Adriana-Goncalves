import React, { useState, useEffect } from "react";
import Footer from "../../component/footer/Footer";
import HeaderApplicationFormPage from "../../component/headerApplicationFormPage/HeaderApplicationFormPage";
import axios from "axios";
import useForm from "../../hooks/useForms";
import { useParams } from "react-router-dom";
import {
  StyledContainerForms,
  StyledForm,
  StyledInput,
  StyledGeneral,
  StyledMidForm
} from "./StyledApplicationFormPage";

import astronauta from "../../img/astronauta3.png"

const urlGetTrips =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks";

const ApplicationFormPage = () => {
  const [countries, setCountries] = useState([]);
  const { id } = useParams();
  const [travelList, setTrips] = useState([]);

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const onSubmitApplyToTrip = (event) => {
    event.preventDefault();

    const urlApplyToTrip =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks/trips";
    axios
      .post(`${urlApplyToTrip}/${form.trip}/apply`, form)
      .then((res) => {
        alert("Inscrito com sucesso!");
        cleanFields();
      })
      .catch((err) => {
        alert("Problema inesperado na inscrição");
        console.log(err.response);
      });
  };

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
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${urlGetTrips}/trips`)
      .then((response) => {
        console.log(response);
        setTrips(response.data.trips);
      })
      .catch((error) => {
        // Para pegar os detalhes do erro, usamos error.response
        console.log(error);
      });
  };

  return (
    <div>
      <ApplicationFormPage />
      <StyledContainerForms>
        <StyledForm>
         
          <StyledMidForm onSubmit={onSubmitApplyToTrip}>
            <StyledGeneral>
              <h2>Formulários de Inscriçõe</h2>
            </StyledGeneral>
            <div>
              <label>Escolha uma viagem: </label>
              <select
                value={form.trip}
                name="trip"
                onChange={onChange}
                required
              >
                {travelList.map((trip, index) => {
                  return (
                    <option key={index} value={trip.id}>
                      {trip.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>Nome:</label>
              <StyledInput
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={onChange}
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
              />
            </div>
            <div>
              <label>Idade:</label>
              <input
                name="age"
                placeholder="idade"
                value={form.age}
                onChange={onChange}
                type="number"
                required
                min={18}
              />
            </div>
            <div>
              <label>Texto de Candidatura:</label>
              <input
                name="applicationText"
                placeholder="Porquê você deseja viajar"
                value={form.applicationText}
                required
                pattern={"^.{30,}"}
                title={"O nome deve ter no mínimo 30 caracteres"}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Profissão:</label>
              <input
                name="profession"
                placeholder="Profissão"
                value={form.profession}
                required
                pattern={"^.{10,}"}
                title={"O nome deve ter no mínimo 10 caracteres"}
                onChange={onChange}
              />
            </div>
            <div>
            <label>País: </label>
              <select
                value={form.country}
                name="country"
                onChange={onChange}
                required
              >
                {countries.map((country, index) => {
                  return (
                    <option key={index} value={country.nome}>
                      {country.nome}
                    </option>
                  );
                })}
              </select>
            </div>

            <StyledGeneral>
              <button>Enviar</button>
            </StyledGeneral>

          </StyledMidForm>
          <div>
            <img src={astronauta}/>
          </div>
        </StyledForm>
      </StyledContainerForms>
      <Footer/>
    </div>
  );
};

export default ApplicationFormPage;
