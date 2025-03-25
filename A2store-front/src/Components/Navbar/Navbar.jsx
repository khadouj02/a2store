import React from "react";
import "./Navbar.css"
import logo from "../../assets/Logo PNG A2_STORE.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';


library.add(faHeartRegular)
function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <span className="logo">A2Store</span> */}
        <div className="logo">
        <img src={logo} alt="" />
        </div>
      <div>
      {/* <Search className="search-icon" size={18} /> */}
      <input type="text" placeholder="Rechercher" className="search-bar" />
      </div>
      </div>
      

      <ul className="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Produits</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-right">
      <FontAwesomeIcon icon={['far', 'heart']} className="icon"/>
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        
      </div>
    </nav>
  );
}
export default Navbar