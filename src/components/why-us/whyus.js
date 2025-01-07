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
                        Sem nulla dignissim arcu semper tempus turpis. Amet risus id nunc augue. Suscipit dictum mauris sed nulla.
                    </p>
                </div>
            </div>

            <hr className="whyus-divider" />

            <div className="whyus-features">
                <div className="whyus-feature">
                    <img src="/icon/taxi.png" alt="Reliable Service" />
                    <h3>Reliable Service</h3>
                    <p>Adipiscing turpis sed faucibus magna at sit tincidunt. Non.</p>
                </div>
                <div className="whyus-feature">
                    <img src="/icon/safety-belt.png" alt="Safety First" />
                    <h3>Safety First</h3>
                    <p>Adipiscing turpis sed faucibus magna at sit tincidunt. Non.</p>
                </div>
                <div className="whyus-feature">
                    <img src="/icon/repair-tools.png" alt="User-Friendly App" />
                    <h3>User-Friendly App</h3>
                    <p>Adipiscing turpis sed faucibus magna at sit tincidunt. Non.</p>
                </div>
                <div className="whyus-feature">
                    <img src="/icon/Steering-wheel.png" alt="Professional Drivers" />
                    <h3>Professional Drivers</h3>
                    <p>Adipiscing turpis sed faucibus magna at sit tincidunt. Non.</p>
                </div>
            </div>
        </div>
    );
}

export default Whyus;
