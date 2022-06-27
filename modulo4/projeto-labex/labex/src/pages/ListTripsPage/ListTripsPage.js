import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../component/footer/Footer";
import { StlydContainer, Teste, Teste2, StyledContainer} from "./StyledListTripsPage";
import HeaderListTrips from "../../component/headerListTripsPage/HeaderListTripsPage";

const urlGetTrips =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};

const ListTripsPage = () => {
  const [travelList, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${urlGetTrips}/trips`, headers)
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
      <HeaderListTrips/>
      <StyledContainer>
        <Teste2>
          <StlydContainer>
            {travelList.map((trips) => {
              return (
                <Teste key={trips.id}>
                  <p><span>Nome:</span> {trips.name}</p>
                  <p>Descrição: {trips.description}</p>
                  <p>Planeta: {trips.planet}</p>
                  <p>Duração: {trips.durationInDays}</p>
                  <p>Data: {trips.date}</p>
                </Teste>
              );
            })}
          </StlydContainer>
        </Teste2>
      </StyledContainer>
    </div>
  );
};

export default ListTripsPage;
