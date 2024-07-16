import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";
import "./loginForm.css";
export function LoginForm() {
    // const [userName, setName] = useState("ieas-admin");
    // const [password, setPassword] = useState("ieas123456");
    const [userName, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorAuth, setErrorAuth] = useState(null);
    const urlLogin = "https://dummyjson.com/auth/login";
    const navigate = useNavigate();

    useEffect(() => {
      console.log("Limpia todo...");
      localStorage.removeItem('cart');
      localStorage.removeItem('token');

    },[])

    const AUTHUSER={
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30, // optional, defaults to 60
    };
    const handleSubmit = (e) => {
        setErrorAuth(null);
        e.preventDefault();
        if (userName === "" || password === "") {
            setError(true);
            return;
        }
        setError(false);
        try{
          const userLogin ={username: userName, password};
          if(userName === "ieas-admin" && password === "ieas123456" ) {
            Object.assign(userLogin,AUTHUSER);
            console.log("El valor del objeto extendido ", userLogin);
            Axios.post(urlLogin,userLogin, { headers: { 'Content-Type': 'application/json' },})
            .then(res => {
              localStorage.setItem('token', res.data.token);
              navigate(`/home`);
              console.log(res.data);
            })
            .catch(error => console.error(error));
          }
          else{
            setErrorAuth("Verifica las credenciales");
          }

        }catch(error){
          setErrorAuth(error);
        }

        // setUser({ userName, password });

    }

    return (
        <div className="form-container d-flex justify-content-center align-items-center vh-100">
      <section className="form-container__section bg-light p-5 rounded">
        <h1 className="form-container__title mb-4">Login</h1>
        <form className="form-container__form"
          onSubmit={handleSubmit}>
          <div className="form-container__group mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-container__label form-label">User Name</label>
            <input type="text" className="form-container__input form-control" id="exampleFormControlInput1"
            value={userName} onChange={e => setName(e.target.value)} placeholder="Type yur user name" />
          </div>
          <div className="form-container__group mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-container__label form-label">Password</label>
            <input type="password" className="form-container__input form-control" id="exampleFormControlTextarea1"
            value={password} onChange={e => setPassword(e.target.value)} placeholder="Type your password" />
          </div>
          {errorAuth != null && <div class="row">
            <div class="col-12">
              <div class="alert alert-danger" role="alert">
              {errorAuth}
              </div>
            </div>
          </div> }
          { error && <div class="row">
            <div class="col-12">
              <div class="alert alert-danger" role="alert">
                Todos los campos son obligatorios
              </div>
            </div>
          </div> }
          <button type="submit" className="form-container__button btn btn-dark">Iniciar Sesión</button>
        </form>
      </section>
    </div>
    )
}