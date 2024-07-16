import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

// Import components for products page
import GetAllProducts from "../component/products/getAllproducts";
import SearchProducts from "../component/products/search";
import MyOrders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";
import PrivateRoute from "./ProvateRoute";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={ <LoginPage />} />
            <Route path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="products" element={<PrivateRoute><Products /></PrivateRoute>}>
                <Route index element={<GetAllProducts />} />
                <Route path="productssearch" element={<SearchProducts />} />
            </Route>
            <Route path="orders" element={<PrivateRoute><MyOrders /></PrivateRoute> } />
            <Route path="basket" element={<PrivateRoute> <Basket /> </PrivateRoute> } />
        </Routes>

    );
}

export default Routing;