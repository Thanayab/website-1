import React from "react";
import "./whyus.css";

function Whyus() {
    return (
        <div className="whyus">
            <div className="whyus-container">
                <div className="whyus-left">
                    <div className="whyus-icon">
                        <img src="/icon/traffic.png" alt="Traffic Icon" />
                    </div>
                    <button className="whyus-button">Why Choose Us?</button>
                </div>
                <div className="whyus-right">
                    <p className="whyus-description">
                    Ashlesha Cabs offers reliable, safe, and comfortable rides with professional drivers and well-maintained vehicles. Our transparent pricing and tailored travel packages ensure an affordable and seamless experience.
                    </p>
                </div>
            </div>

            <hr className="whyus-divider" />

            <div className="whyus-features">
                <div className="whyus-feature">
                    <img src="/icon/taxi.png" alt="Reliable Service" />
                    <h3>Reliable Service</h3>
                    <p>Timely pickups and drop-offs with consistent and dependable travel solutions.</p>
                </div>
                <div className="whyus-feature">
                    <img src="/icon/safety-belt.png" alt="Safety First" />
                    <h3>Safety First</h3>
                    <p>Your safety is our top priority, with well-maintained vehicles and secure rides.</p>
                </div>
                <div className="whyus-feature">
                    <img src="/icon/repair-tools.png" alt="User-Friendly App" />
                    <h3>User-Friendly App</h3>
                    <p>Easily book rides and manage trips with our intuitive and hassle-free app.</p>
                </div>
                <div className="whyus-feature">
                    <img src="/icon/Steering-wheel.png" alt="Professional Drivers" />
                    <h3>Professional Drivers</h3>
                    <p>Experienced, courteous drivers ensuring a smooth and comfortable journey.</p>
                </div>
            </div>
        </div>
    );
}

export default Whyus;
