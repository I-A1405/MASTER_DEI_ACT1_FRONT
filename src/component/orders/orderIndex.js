import { useState, useEffect } from "react";
import Axios from "axios";
import OrdersList from "./ordersList";

function OrderIndex() {
    const [orders, setOrders] = useState([]);
    const [loadOrders, setLoadOrders] = useState(false);

    useEffect(() => {
        // Debe ser dinamico con base el userAUtenticado
        Axios.get('https://dummyjson.com/carts/user/33').then(res => {
            setOrders(res.data.carts);
            setLoadOrders(true);
            console.log("Respuesta ", res.data)
        });
    }, []);
    return (
        <div className="main-content">
            <div className="row">
                <div className="col-12 mb-3">
                    <h1 className="content__title">My Orders List</h1>
                </div>
                {loadOrders &&
                    orders.map(order => {
                        return (
                            <div key={order.id} className="col-12 card order-cart" >
                                <div class="card-header">
                                    Order Number: {order.id}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4" >
                                            <p className="card-text">Total Products: <b>{order.totalProducts}</b> </p>
                                        </div>
                                        <div className="col-4" >
                                            <p className="card-text">Total Quantity: <b>{order.totalQuantity}</b> </p>
                                        </div>
                                        <div className="col-4" >
                                            <h5 className="card-title">Total: {order.id}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                            <OrdersList products={order.products} column={"col-4"} ></OrdersList>
                                    </div>
                                </div>
                            </div>

                        )

                    })
                    // 
                }
            </div>
        </div>

    );
}

export default OrderIndex;