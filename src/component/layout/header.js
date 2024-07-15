import { Link } from "react-router-dom";

import './header.css';
function Header({ userName }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-global">
      <div class="container-fluid">
        <Link to="/home" class="navbar-brand">IEAS Nav Project</Link>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">**</span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto navbar-user">
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="bi bi-person"></span> Ivan E. Avila</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about"><span class="bi bi-box-arrow-right"></span> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;