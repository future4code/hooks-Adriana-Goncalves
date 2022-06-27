import React from "react";
import axios from "axios";
import Footer from "../../component/footer/Footer";
import {StlydContainer, StlydLongin, Teste, StlydImg} from "./StyledLoginPage"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import astronauta from "../../img/astronauta1.png"
import HeaderLoginPage from "../../component/headerLoginPage/HeaderLoginPage"


const LoginPage = () => {
    const [email, setEmail]= useState ("");
    const [password, setPassword]= useState ("");
    const navigate =useNavigate();

    // input controlados 
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
    const onChangePassword = (event) => {
        setPassword(event.target.value);
      };
    
    const onSubmitLogin = (event) => {
        event.preventDefault()
        const urlPostLogin =
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks/login";

        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(urlPostLogin, body)
          .then((res) => {
            // armazena o token e com o naviagte ele muda de pagina( pagina de detalhes)
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            navigate("/adminHomePage");
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      };


    return (
        <main>
            <HeaderLoginPage/>

            <Teste>
              <form onSubmit={onSubmitLogin}>
                <StlydContainer>
                    <StlydLongin>
                        <label>Email</label>
                        <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        required
                        onChange={onChangeEmail}
                        />
                        <label >Senha</label>
                        <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        required
                        onChange={onChangePassword}
                        />
                    </StlydLongin>
                    <div>
                        <button>Login</button>
                    </div>
                </StlydContainer>
              </form>
                <div>
                    <StlydImg src={astronauta}/>
                </div>
            </Teste>
            <Footer/>
        </main>
    )
};

export default LoginPage;