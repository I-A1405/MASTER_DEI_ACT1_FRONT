import ProductCard from "./productCard";
import './products.css';


function ProductsList({ products }) {



    return (

        <div className="row">

            <div className="col-12">
                {
                    products.length === 0 && (
                        <div className="alert alert-info" role="alert">
                            No hay productos disponibles.
                        </div>
                    )
                }
            </div>
            <div className="col-12">
                <div className="container product-list">
                    <div className="row">
                        {products.map(product => {
                            return (
                                <ProductCard product={product} key={product.id} />
                            )
                        })}
                    </div>

                </div>


            </div>
        </div>
    );
}

export default ProductsList;