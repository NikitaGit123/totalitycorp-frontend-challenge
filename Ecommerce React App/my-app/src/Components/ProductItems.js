import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Categories from "./Categories";

export default function ProductItems(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSortOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/menu/${props.category}/${sortOption}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        return response.json();
      })
      .then((data) => setMenuItems(data))
      .catch((error) => console.log(error));
  }, [props.category, sortOption]);

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // adding  product in carts
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Categories />
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="container">
          <label htmlFor="sortOption"></label>
          <select
            id="sortOption"
            value={sortOption}
            onChange={handleSortOptionChange}
            className="responsive-select"
          >
            <option value="">None</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="container" style={{ padding: "30px" }}>
        <div className="row">
          {menuItems.map((elem) => {
            return (
              <div className="col-md-4 col-sm-6 col-12" key={elem.id}>
                <div className="card" style={{ width: "18rem",margin:"10px" }}>
                  <img src={elem.image_Url} className="card-img" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{elem.category}</h5>
                    <p className="card-text">{elem.description}</p>
                    <Rating rating={elem.rating} />
                    <b>{elem.price}</b>
                    <button
                      className="card-button"
                      onClick={() => handleAddToCart(elem)}
                    >
                      <Link to="/checkout">Add to Cart</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/">←Back</Link>
    </div>
  );
}
