import { Link } from "react-router-dom";
import { FaDoorClosed, FaShoppingBag  } from 'react-icons/fa';
import './header.css';
function Header({ userName }) {
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
              <Link className="nav-link" >Ivan E. Avila</Link>
            </li>
            <li className="nav-item">
              <Link to="/basket" className="nav-link" ><FaShoppingBag/>
              <span className="text-white">5</span>
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