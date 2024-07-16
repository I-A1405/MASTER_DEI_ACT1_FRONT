import { useState, useEffect } from "react";
import useCustomCounter from "../../assets/hooks/useCustomCounter";
import { FaChevronCircleDown, FaChevronCircleUp, FaShoppingBag } from "react-icons/fa";
import './cardCounter.css';

function CardCounter({product, settings}) {
    const { counter, increaseCounter, decreaseCounter, handleInputChange } = useCustomCounter();
    const [updateBasket, setUpdateBasket] = useState();
    const addToCart =() => {
        manageToCart(true);
    }
    const removeToCart =() => {
        manageToCart(false);
    }
    const manageToCart = (add) => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const productIndex = cart.findIndex(item => item.id === product.id);
  
      if (productIndex !== -1) {
        if(add){
            cart[productIndex].quantity += counter;
            setUpdateBasket(updateBasket+1); 
        }
        else if(cart[productIndex].quantity >= counter){
            cart[productIndex].quantity -= counter;
            
            if(cart[productIndex].quantity===0){
                cart.splice(productIndex, 1);
            }
            setUpdateBasket(updateBasket+1); 
        }
        else{
            alert(`You do not have enough products to reduce the quantity. Please check the quantity of your product. You can only remove up to ${cart[productIndex].quantity} products.`);
        }
        
  
      } else {
        cart.push({id:product.id, product, quantity: counter });
        setUpdateBasket(updateBasket+1); 
        console.log('insert producto');
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage')); // Esto se usará para notificar el cambio en el header
    };
  
    useEffect (() => {
      if(updateBasket>0){
        console.log('llamar actualizar shopping cart');
        window.dispatchEvent(new Event('storage'));

      }
    }, [updateBasket]);
  
    const tooltipText = `Add to Cart ${counter > 0 ? `(${counter}) attempt(s)` : ''}`;
    const tooltipRemove = `Remove to Cart ${counter > 0 ? `(${counter}) attempt(s)` : ''}`;
    return (

        <div className="product-card__counter mb-2">
            {settings.remove && 
            <button type="button" className=" btn btn-danger"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={tooltipRemove}
            onClick={removeToCart}
            disabled={counter <= 0}>
            <FaShoppingBag />
        </button>
            }
            

            <button type="button" className="product-card__button btn btn-primary" onClick={decreaseCounter} disabled={counter <= 0}>
                <FaChevronCircleDown />
            </button>
            <input
                type="text"
                className="product-card__input form-control"
                value={counter}
                onChange={handleInputChange}
                maxLength="3"
            />
            <button type="button" className="product-card__button btn btn-primary" onClick={increaseCounter} disabled={counter >= 999}>
                <FaChevronCircleUp />
            </button>
            <button type="button" className=" btn btn-success"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={tooltipText}
                onClick={addToCart}
                disabled={counter <= 0}>
                <FaShoppingBag />
            </button>

        </div>
    );
}

export default CardCounter;