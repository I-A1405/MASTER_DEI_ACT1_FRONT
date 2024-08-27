import { useState, useEffect,useCallback  } from "react";
import OrdersList from "../orders/ordersList";
import Axios from "axios";

function BasketIndex() {
    const [myBasket, setMyBasket] = useState([]);
    const [orderDetails, setOrderDetails] = useState({
        totalProducts: 0,
        totalQuantity: 0,
        discountedTotal: 0,
        total: 0
    });

    const calculateTotal = (price, quantity, percentage) => {
        const total = price * quantity;
        const discounted = total * (percentage / 100);
        const realTotal = total - discounted;
        return { total, realTotal, discounted };
    };

    const updateBasket = useCallback(() => {
        let storageCart = JSON.parse(localStorage.getItem('cart')) || [];
        let myList = [];
        let totalProducts = 0;
        let totalQuantity = 0;
        let total = 0;
        let discountedTotal = 0;
        storageCart.forEach(item => {
            const discountPercentage =  item.product.discountPercentage || 0;
            if(item.product.discountPercentage!==discountPercentage){
                item.product.discountPercentage = discountPercentage;
            }
            const calculate = calculateTotal(item.product.price, item.quantity, discountPercentage);
            myList.push(Object.assign(item.product, { quantity: item.quantity, total: calculate.total, discountedTotal: calculate.discounted }));
            totalQuantity += item.quantity;
            totalProducts += 1;
            total += calculate.realTotal;
            discountedTotal += calculate.discounted;
        })
        setOrderDetails({
            totalProducts,
            totalQuantity,
            discountedTotal,
            total
        });
        setMyBasket(myList);
    },[]);

    useEffect(() => {
        updateBasket();
        const handleBasketChange = () => updateBasket();
        window.addEventListener('basket', handleBasketChange);

        return () => {
            window.removeEventListener('basket', handleBasketChange);
        };
    }, [updateBasket])

    const handlePurchase = () => {
        console.log("Purcehouse order model -->", localStorage.getItem('cart'));

       
       

       

        const userConfirmed = window.confirm('Are you sure you want to proceed with the purchase?');
        if (userConfirmed) {
       

            let registerOrder = { 
                order:{
                    userId: 1,
                    totalProducts: orderDetails.totalProducts,
                    discountedTotal: parseFloat(orderDetails.discountedTotal.toFixed(2)),
                    total: parseFloat(orderDetails.total.toFixed(2))
                }
                ,
                orderItems: myBasket.map(item => ({
                    orderId: 0,
                    title: item.title,
                    category: item.category,
                    brand: item.brand,
                    price: item.price,
                    quantity: item.quantity,
                    thumbnail: item.thumbnail,
                    total: item.total,
                    discountPercentage: item.discountPercentage,
                    discountedTotal: item.discountedTotal,
                }))
            };
            Axios.post(`${process.env.REACT_APP_API_URL}order`,registerOrder).then(res => {
                localStorage.removeItem('cart');
                window.dispatchEvent(new Event('storage')); 
                alert('Your purchase has been successfully completed.');
            });
        }
      };
    return (
        <div className="main-content">
            <div className="row">
                <div className="col-12 mb-3">
                    <h1 className="content__title">My Shopping Basket</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3" >
                    <p className="card-text">Total Products: <b>{orderDetails.totalProducts}</b> </p>
                </div>
                <div className="col-3" >
                    <p className="card-text">Total Quantity: <b>{orderDetails.totalQuantity}</b> </p>
                </div>
                <div className="col-3" >
                    <p className="card-text">Discounted Total: <b>{orderDetails.discountedTotal.toFixed(2)}</b></p>
                </div>
                <div className="col-3" >
                    <h5 className="card-title">Total: {orderDetails.total.toFixed(2)}</h5>
                </div>
                {orderDetails.totalProducts >0 && <div className="col-3 mt-3"  >
                    <button type="button" className="btn btn-primary btn-block" onClick={handlePurchase}>Proceed to Purchase</button>
                </div>}
            </div>
            <div className="row">
                <OrdersList products={myBasket} column={"col-6"} canEdit={true} ></OrdersList>
            </div>
        </div>

    );
}

export default BasketIndex;