import React, { useState } from "react";
import { Link } from "react-router-dom";
import './menu.css';
import { FaHome,FaRegListAlt,FaRegMoneyBillAlt,FaShoppingBag  } from "react-icons/fa";
function Menu() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <nav  className={`navbar-primary ${isCollapsed ? 'collapsed' : ''}`}>
       <div className="btn-expand-collapse" onClick={toggleSidebar}>
         {isCollapsed ? '>' : '<'}
       </div>
      {/* <a href="#" class="btn-expand-collapse"><span class="bi bi-chevron-left"></span></a> */}
      <ul className="navbar-primary-menu">
          <li className="sidebar__item "  >
            <Link to="/home" className="nav-link">
              <FaHome/> Home
            </Link >
          </li>
        <li>
          <Link to="/products" className="nav-link">
            <FaRegListAlt/> Products
          </Link >
        </li>
        <li>
          <Link to="/orders" className="nav-link">
            <FaRegMoneyBillAlt/>  My Orders
          </Link >
        </li>
        <li>
          <Link to="/basket" className="nav-link">
            <FaShoppingBag/>  Shopping Basket
          </Link >
        </li>
      </ul>
    </nav>

  );
}

export default Menu;