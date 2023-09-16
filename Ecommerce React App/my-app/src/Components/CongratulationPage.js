import React from "react";
import "./style.css";
import { Link} from "react-router-dom";

// item booked successfully page
export default function CongratulationPage() {
  return (
    <div>
      <div className="contain">
        <div className="congrats">
          <h1>
            Congrat<span className="hide">ulation</span>s !
          </h1>
          <div className="text">
            <p>You have successfully booked Your Order</p>
            <p>Eagerly awaiting your visit</p>
          </div>
          <div className="">
          <Link className="nav-link" to="/">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
