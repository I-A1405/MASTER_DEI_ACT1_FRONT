import { useState, useEffect } from "react";
import Axios from "axios";
import OrdersList from "./ordersList";

function OrderIndex() {
    const [orders, setOrders] = useState([]);
    const [loadOrders, setLoadOrders] = useState(false);

    useEffect(() => {
        // Debe ser dinamico con base el userAUtenticado
        //http://192.168.0.100:8060/order/user/1
        Axios.get(`${process.env.REACT_APP_API_URL}order/user/1`).then(res => {
            setOrders(res.data);
            setLoadOrders(true);
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
                            <div key={order.order.id} className="col-12 card order-cart" >
                                <div class="card-header">
                                    Order Number: {order.order.id}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3" >
                                            <p className="card-text">Total Products: <b>{order.order.totalProducts}</b> </p>
                                        </div>
                                        <div className="col-3" >
                                            <p className="card-text">Total Quantity: <b>{order.order.total}</b> </p>
                                        </div>
                                        <div className="col-3" >
                                        <p className="card-text">Discounted Total: <b>{order.order.discountedTotal}</b></p>
                                        </div>
                                        <div className="col-3" >
                                            <h5 className="card-title">Total: {order.order.total}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                            <OrdersList products={order.orderItems} column={"col-4"} ></OrdersList>
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