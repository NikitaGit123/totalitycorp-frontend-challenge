import React, { useEffect, useState } from 'react';
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(storedCartItems.length);
  }, []);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            E-Furniture
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">✖</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
            <form className="d-flex">
              <div className='d-flex cartButton'>
                <Link to="/checkOut">
                  <FontAwesomeIcon icon={faShoppingCart} /> {/* Icon usage */} 
                </Link>
                <Link to="/checkOut">{cartCount}</Link>
              </div>

              {/* Add the user avatar */}
              <div className='d-flex align-items-center ml-3'>

              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
