import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaDoorClosed, FaShoppingBag } from 'react-icons/fa';

import './header.css';
function Header() {
  const [cartItems, setCartItems] = useState(0);
  const [userName, setName] = useState("");

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItems(itemCount);
    window.dispatchEvent(new Event('basket'));

  };

  useEffect(() => {
    updateCartCount(); // Initial load
    const handleStorageChange = () => updateCartCount();
    window.addEventListener('storage', handleStorageChange);
    setName(localStorage.getItem('userName'));

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-global">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">IEAS Project</Link>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">**</span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto navbar-user">
            <li className="nav-item">
              <Link className="nav-link" >{userName}</Link>
            </li>
            <li className="nav-item">
              <Link to="/basket" className="nav-link" >
                <button type="button" className={`btn btn-sm ${cartItems>0 ?'btn-outline-success': 'btn-outline-secondary'}  position-relative`}>
                <FaShoppingBag />
                  {cartItems >0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems}
                  </span>}
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"> <FaDoorClosed /> Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;