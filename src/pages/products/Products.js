import Header from "../../component/layout/header";
import Menu from "../../component/layout/menu";
import ProductIndex from "../../component/products";
function Products() {
    return (
        <div>
            <Header userName={"Ivan E. "} />
            <div className="app__body">
                <Menu />
                <ProductIndex />
            </div>
        </div>

    );
}

export default Products;