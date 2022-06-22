import React from "react";
import axios from "axios";
import Footer from "../../component/footer/Footer";
import {StlydContainer, StlydLongin, Teste, StlydImg} from "./StyledLoginPage"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import astronauta from "../../img/astronauta1.png"
import HeaderLoginPage from "../../component/headerLoginPage/HeaderLoginPage"


const urlPostLogin =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriane-almeida-hooks/login";



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
    
    const onSubmitLogin = () => {
    
        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(urlPostLogin, body)
          .then((res) => {
            // console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            navigate("/tripDetails");
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      };


    return (
        <main>
            <HeaderLoginPage/>

            <Teste>
                <StlydContainer>
                    <StlydLongin>
                        <h3>Login Here</h3>

                        <label for="username">Email</label>
                        <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={onChangeEmail}
                        />

                        <label for="password">Senha</label>
                        <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={onChangePassword}
                        />
                    </StlydLongin>
                    <div>
                        <button onClick={onSubmitLogin}>Login</button>
                        <div class="social">
                            <div class="go"><i class="fab fa-google"></i>  Google</div>
                            <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                        </div>
                    </div>
                </StlydContainer>
                <div>
                    <StlydImg src={astronauta}/>
                </div>
            </Teste>
            <Footer/>
        </main>
    )
};

export default LoginPage;