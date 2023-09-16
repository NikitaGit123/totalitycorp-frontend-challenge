import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Categories from "./Categories";
import carousal1 from '../Images/carousal1.jpg'; // Adjust the path as needed
import carousal2 from '../Images/carousal2.jpg'; // Adjust the path as needed
import carousal3 from '../Images/carousal3.jpg'; // Adjust the path as needed



function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Carousal section */}
      <div className="container-fluid carouselBox">
        <div className="row">
          <Categories/>
          <div className="col-sm-12 col-md">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={carousal1}
                    className="d-block  w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={carousal2}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={carousal3}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ padding: "20px" }}>
          <div className="col">
            <p className="supportBox">Free Shipping</p>
            <p>Free shipping on all US order</p>
          </div>
          <div className="col">
            <p className="supportBox">Support 4/27</p>
            <p>Contact us 24 hours a day </p>
          </div>
          <div className="col">
            <p className="supportBox">100% Money Back</p>
            <p>You have 30 days to return</p>
          </div>
          <div className="col">
            <p className="supportBox">Payment secure</p>
            <p>We ensure secure payment</p>
          </div>
        </div>
      </div>
      <div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
