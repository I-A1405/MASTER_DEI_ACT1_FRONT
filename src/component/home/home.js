import React from "react";
export function Home({user, setUser}){
const handleLogout =(e) =>{
    e.preventDefault();
    setUser(null);
}
return (
<div>
    <h1>Bienvenido {user.userName} </h1>
    <button onClick={handleLogout} class="btn btn-secondary">Salir</button>
</div>

)

}