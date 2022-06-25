import React from "react";
import { useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";


const TripDetailsPage = () => {
  const[ tripDetails, setTripDetails] = useState({});
  
    useProtectedPage();
    const params = useParams();

    useEffect(() => {
        const urlTripDetailsPage = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks/trip"
        const headers = {
            headers: {
              auth: localStorage.getItem("token")
            }
          };

          axios
          .get(`${urlTripDetailsPage}/${params.id}`, headers)
          .then((res) => {
            setTripDetails(res.data.trip);
          })
          .catch((err) => {
            console.log(err);
          });


    }, []);
    return (
        <div>
            <div>
                <p>TripDetailsPage</p>
                <p>{tripDetails.name}</p>
                <p>{tripDetails.description}</p>
                <p>{tripDetails.planet}</p>
                <p>{tripDetails.durationInDays}</p>
                <p>{tripDetails.date}</p>
                <p>{tripDetails.description}</p>
                <p>{tripDetails.candidates}</p> // map
            </div>
           
        </div>
    )
};

export default TripDetailsPage;