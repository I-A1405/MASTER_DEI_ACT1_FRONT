import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Categories from "../pages/categories/Categories";

// Import components for products page
import GetAllProducts from "../component/products/getAllproducts";
import SearchProducts from "../component/products/search";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />}>
                <Route index element={<GetAllProducts />} />
                <Route path="productssearch" element={<SearchProducts />} />
            </Route>
            <Route path="categories" element={<Categories />} />
        </Routes>

    );
}

export default Routing;