import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-3"> 
        
        <a className="navbar-brand fw-bold" href="#">Cangsters</a>

        
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#">Camisetas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Prendas Inferiores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Zapatos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gorras</a>
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
