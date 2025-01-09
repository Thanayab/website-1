import React from "react";
import "./heropage.css";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-content-1">
                        <h1 className="hero-title">Transparent. Safe. <span>Reliable</span></h1>
                        <p className="hero-description">Experience hassle-free booking, transparent pricing, and personalized travel solutions tailored to your needs. Let Ashlesha Cabs make every trip memorable. Your destination is just a ride away with us!</p>
                    </div>

                    <div className="hero-book-now">
                        <div className="hero-pickup">
                            <img src="/icon/MagnifyingGlass.png" alt="marker" />
                            <input type="text" placeholder="Pickup Location" />
                        </div>
                        <div className="hero-drop">
                            <img src="/icon/MapPinLine.png" alt="marker" />
                            <input type="text" placeholder="Drop Location" />
                        </div>
                        <div className="hero-time">
                            <img src="/icon/Icon.png" alt="marker" />
                            <input type="datetime" placeholder="Time Schedule" />
                        </div>
                        <button className="hero-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
