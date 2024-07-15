import Header from "../../component/layout/header";
import Menu from "../../component/layout/menu";
import BasketIndex from "../../component/basket/basketIndex";

function Basket() {
    return (  
        <div>
            <Header userName={"Ivan E. "} />
            <div className="app__body">
                <Menu />
                <BasketIndex/>
            </div>
        </div>
    );
}

export default Basket;