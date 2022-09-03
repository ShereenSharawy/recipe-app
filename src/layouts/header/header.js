import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../header/header.scss';
function Header(){
  const location = useLocation();
   return(
    <nav className="navbar navbar-expand-lg bg-light mb-5">
  <div className="container-fluid">
  <a to="/" className="logo"><span>Recipes</span>Project</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav-links navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/"  className={location.pathname === '/' ? 'active' : ''}> Home </Link>
        </li>
        <li className="nav-item">
        <Link to="/recipes" className={location.pathname === '/recipes' ? 'active' : ''}> Recipes </Link>
  
        </li>
        <nav>
      </nav>
      </ul>
    </div>
  </div>
</nav>
   )

}
export default Header;