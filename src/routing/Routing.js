import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/Login";

function Routing() {
    return ( 
<Routes>
    <Route path="/" element={<LoginPage />} />
</Routes>

     );
}

export default Routing;