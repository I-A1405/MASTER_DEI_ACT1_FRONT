import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "axios";
import ProductsList from "./productsList";

function SearchProducts() {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);
    const [mySearch] = useSearchParams();
    useEffect(() => {
        console.log("valor del serach parameters --> ",mySearch.get("keyword"));
        Axios.get(`${process.env.REACT_APP_API_URL}products/search?query=${mySearch.get("keyword")}`).then(res => {
            setProducts(res.data);
            setLoadProducts(true);
            // console.log("Carga los productos", res.data.products);
        })
    }, [mySearch]);
    return ( 
        <div>
             {
            loadProducts &&
            <ProductsList products ={products}/>
            }
        </div>
     );
}

export default SearchProducts;