import React, {useState} from "react";
import axios from "axios";

const urlProfileToChoose = 
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

const headers = {
    headers: {
      Authorization: "adriane-almeida-hooks"
    }
  };

function TelaInicial(props) {
    const [profiles, setProfile ] = useState ([])

    getProfileToChoose = () => {
        axios
          .get(urlProfileToChoose, headers)
          .then((response) => {
            setProfile({ profile: response.data.result.list });
          })
          .catch((error) => {
            // Para pegar os detalhes do erro, usamos error.response
            console.log(error);
          });
      };

      use

    const ListaProfile = profiles.map(profile => {
        return ( 
            <div>
                {profiles.map((profile) =>{
                    return (
                        <p>
                            {profile}
                        </p>
                    )
                }
                )}
            </div>
        )
    }

    return(
        <div>
            {ListaProfile}
          
        </div>

    )
}
export default TelaInicial