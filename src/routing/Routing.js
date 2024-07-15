import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

// Import components for products page
import GetAllProducts from "../component/products/getAllproducts";
import SearchProducts from "../component/products/search";
import MyOrders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />}>
                <Route index element={<GetAllProducts />} />
                <Route path="productssearch" element={<SearchProducts />} />
            </Route>
            <Route path="orders" element={<MyOrders />} />
            <Route path="basket" element={<Basket />} />
            
        </Routes>

    );
}

export default Routing;