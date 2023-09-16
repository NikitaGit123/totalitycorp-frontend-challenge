import React, { useState } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const ShippingPaymentForm = () => {
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData({
      ...shippingData,
      [name]: value,
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, we'll just log the data for now.
    console.log('Shipping Data:', shippingData);
    console.log('Payment Data:', paymentData);
  };

  return (
    <>
    <Navbar/>
    <div className="form-container"> {/* Apply styles to the container */}
      <div className="form-box">
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Shipping Details */}
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={shippingData.firstName}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={shippingData.lastName}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={shippingData.address}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={shippingData.city}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={shippingData.postalCode}
              onChange={handleShippingChange}
              required
            />
          </div>
        </form>
      </div>
      <div className="form-box">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Payment Details */}
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handlePaymentChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name:</label>
            <input
              type="text"
              name="cardName"
              value={paymentData.cardName}
              onChange={handlePaymentChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardExpiry">Expiry Date:</label>
            <input
              type="text"
              name="cardExpiry"
              value={paymentData.cardExpiry}
              onChange={handlePaymentChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardCVV">CVV:</label>
            <input
              type="text"
              name="cardCVV"
              value={paymentData.cardCVV}
              onChange={handlePaymentChange}
              required
            />
          </div>
          <button type="submit" style={{color:"#fff"}}>
          <Link className="nav-link" to="/congratulation" style={{color:"#fff"}}>submit</Link>
          </button>
        </form>
      </div>
    </div>
    </>

  );
};

export default ShippingPaymentForm;
