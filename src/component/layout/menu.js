import React, { useState } from "react";
import { Link } from "react-router-dom";
import './menu.css';
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
        <li>
          <li className="sidebar__item "  >
            <Link to="/home" className="nav-link">
              Home
            </Link >
          </li>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link >
        </li>
        <li>
          <Link to="/categories" className="nav-link">
            Categories
          </Link >
        </li>
      </ul>
    </nav>

  );
}

export default Menu;