import { useState, useEffect } from "react";
import Axios from "axios";
import ProductsList from "./productsList";

function GetAllProducts() {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URL}products`).then(res => {
            setProducts(res.data);
            setLoadProducts(true);
        })
    }, []);
    return ( 
        <div>
            {
            loadProducts &&
            <ProductsList products ={products}/>
            }
        </div>
     );
}

export default GetAllProducts;