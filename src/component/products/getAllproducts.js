import { useState, useEffect } from "react";
import Axios from "axios";
import ProductsList from "./productsList";

function GetAllProducts() {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);

    useEffect(() => {
        Axios.get('https://dummyjson.com/products').then(res => {
            setProducts(res.data.products);
            setLoadProducts(true);
            // console.log("Carga los productos", res.data.products);
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