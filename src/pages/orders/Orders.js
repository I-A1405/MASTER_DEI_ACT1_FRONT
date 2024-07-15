import Header from "../../component/layout/header";
import Menu from "../../component/layout/menu";
import OrderIndex from "../../component/orders/orderIndex";

function MyOrders() {
    return (
        <div>
            <Header userName={"Ivan E. "} />
            <div className="app__body">
                <Menu />
                <OrderIndex />
            </div>
        </div>

    );
}

export default MyOrders;