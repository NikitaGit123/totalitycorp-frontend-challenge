import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";


export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);


  // get total items price
  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
      return acc + itemPrice;
    }, 0);
  
    // Format the total price with two decimal places
    return totalPrice.toFixed(2);
  };

  // Remove items from cart
  const handleRemoveItem = (itemIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="col-7">
          <h2>Shopping Cart</h2>
          <hr />
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{listStyle:"none"}}>
                <div className="row">
                  <div className="col">
                    <img src={item.image_Url} style={{width:"50px",height:"50px", margin: "10px"}} alt="Product" />
                  </div>
                  <div className="col">{item.category}</div>
                  <div className="col">{item.price}</div>
                  <div className="col">
                    <button onClick={() => handleRemoveItem(index)} className="shop_cart_btn">Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-7">
        <h2>Shopping Details</h2><hr></hr>
          <div className="row cartTag">
            <div className="col" style={{"fontSize":"20px"}}>Total Price:</div>
            <div className="col" style={{"fontWeight":"bold"}}>${getTotalPrice()}</div>
          </div>
          <div className="row cartTag">
          <div className="col" style={{"fontSize":"20px"}}>Total Items:</div>
            <div className="col" style={{"fontWeight":"bold"}}>{cartItems.length}</div>
          </div>
          <button type="button" className="Paymentbtn">
           <Link className="nav-link" to="/ShippingPaymentForm">Make the Payment</Link>
          </button>
        </div>
      </div>

      <div className="">
        <Link className="nav-link" to="/">Continue Shopping</Link>
      </div>
      <Footer/>
    </div>
  );
}
