import React from "react";
import { useEffect } from "react";
import Footer from "../../component/footer/Footer";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { useParams } from "react-router-dom";




const TripDetailsPage = () => {
  
    useProtectedPage();
    const params = useParams();

    useEffect(() => {
        const urlTripDetailsPage = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks/trip/"
        const headers = {
            headers: {
              auth: localStorage.getItem("token")
            }
          };

          axios
          .get(`${urlTripDetailsPage}/${params.id}`, headers)
          .then((res) => {
            console.log(res.data.trip);
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });


    }, []);
    return (
        <div>
            <div>
                <p>TripDetailsPage</p>
              
            </div>
            <Footer/>
        </div>
    )
};

export default TripDetailsPage;