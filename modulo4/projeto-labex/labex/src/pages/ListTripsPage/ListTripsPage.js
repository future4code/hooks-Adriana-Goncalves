import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../component/footer/Footer";
import {goToApplicationFormPage} from "../../coordinator/Coordinator"
import {useNavigate} from"react-router-dom";


const urlGetTrips =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks";

const headers = {
  headers: {
    Authorization: "adriane-almeida-hooks",
  },
};

const ListTripsPage = () => {
    const [travelList, setTrips] = useState([])

    const navigate = useNavigate()

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
            <div>
                <p>ListTripsPage</p>
                {travelList.map(trips => {
                  return(
                    <div key={trips.id}>
                      <p>{trips.name}</p>
                      <p>{trips.description}</p>
                      <p>{trips.planet}</p>
                      <p>{trips.durationInDays}</p>
                      <p>{trips.date}</p>
                    </div>
                  )
                })}
                
            </div>
            <button onClick={()=> goToApplicationFormPage(navigate)}>Inscrever</button>
            <Footer/>
            
        </div>
    )
};

export default ListTripsPage;