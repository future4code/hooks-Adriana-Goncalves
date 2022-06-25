import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from"react-router-dom";
import {goToTripDetailsPage} from"../../coordinator/Coordinator"
import Footer from "../../component/footer/Footer"
import {StyledContainer} from "./StyledAdminHomePage"


const urlGetTrips =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};


const AdminHomePage = () => {
    const [travelList, setTrips] = useState([])
    const navigate =useNavigate();

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
            <p>AdminHomePage</p>
          <StyledContainer>
            <div>
                {travelList.map(trips => {
                  return(
                    <div key={trips.id}>
                      <div>
                        <p>{trips.name}</p>
                        <button  onClick={() => navigate(`/tripDetailsPage/${trips.id}`)}>Detalhes</button>
                        <button>Deletar</button>
                      </div>
                    </div>
                  )
                })}    
            </div>
          </StyledContainer>
        </div>
    )
};

export default AdminHomePage;