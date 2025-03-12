import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-3"> 
        <Link className="navbar-brand fw-bold" to="/">Cangsters</Link>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/category/camisetas">Camisetas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/prendas-inferiores">Prendas Inferiores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/zapatos">Zapatos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/gorras">Gorras</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex me-2"> 
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
