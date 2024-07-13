import React from "react";
import { useState } from "react";
import "./loginForm.css";
export function LoginForm() {
    const [userName, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName === "" || password === "") {
            setError(true)
            return
        }
        setError(false)
        // setUser({ userName, password });

    }

    return (
        <div className="form-container d-flex justify-content-center align-items-center vh-100">
      <section className="form-container__section bg-light p-5 rounded">
        <h1 className="form-container__title mb-4">Login</h1>
        <form className="form-container__form"
          onSubmit={handleSubmit}>
          <div className="form-container__group mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-container__label form-label">Usuario</label>
            <input type="text" className="form-container__input form-control" id="exampleFormControlInput1" value={userName} onChange={e => setName(e.target.value)} placeholder="Ingresa nombre del usuario" />
          </div>
          <div className="form-container__group mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-container__label form-label">Contraseña</label>
            <input type="password" className="form-container__input form-control" id="exampleFormControlTextarea1" value={password} onChange={e => setPassword(e.target.value)} placeholder="Ingresa contraseña del usuario" />
          </div>
          <button type="submit" className="form-container__button btn btn-dark">Iniciar Sesión</button>
        </form>
        {error && <p className="form-container__error text-danger mt-3">Todos los campos son obligatorios</p>}
      </section>
    </div>
    )
}