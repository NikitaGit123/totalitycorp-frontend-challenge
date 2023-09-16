import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image1 from '../Images/Image1.jpg'; // Adjust the path as needed
import Image2 from '../Images/Image2.jpg'; // Adjust the path as needed
import Image4 from '../Images/Image4.avif'; // Adjust the path as needed


export default function Aboutus() {
  return (
    <div>
      <Navbar/>
      <div className="container">
          <div className="Blog_heading">
            <h1>Our Blog Post</h1>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col" style={{ margin: "30px" }}>
              <img
                src={Image1}
                style={{ width: "300px",height:"200px" }}
              ></img>
              <p>Try Comfort with Customiser </p>
            </div>
            <div className="col" style={{ margin: "30px" }}>
              <img
                src={Image2}
                style={{ width: "300px",height:"200px" }}
              ></img>
              <p>Try Comfort with Customiser </p>
            </div>
            <div className="col" style={{ margin: "30px" }}>
              <img
                src={Image4}
                style={{ width: "300px" }}
              ></img>
              <p>Try Comfort with Customiser </p>
            </div>
            <div className="col" style={{ margin: "30px" }}>
              <img
                src={Image1}
                style={{ width: "300px",height:"200px" }}
              ></img>
              <p>Try Comfort with Customiser </p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
