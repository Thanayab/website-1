import React from "react";
import "./booknow.css";

function Booknow() {
    return (
        <div className="booknow">
            <h1 className="booknow-title">Book the best service as per your <br />requirement...</h1>
            <div className="booknow-container">
                <div className="booknow-img">
                    <img src="/img/car-1.png" alt="img" />
                </div>

                <div className="booknow-form">
                    <div className="booknow-form-container">
                        <button className="booknow-form-btn">Local Taxi</button>
                        <button className="booknow-form-btn">Rental</button>
                        <button className="booknow-form-btn">Outstation</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Booknow;