import React from "react";
import "./aboutus.css";

function Aboutus() {
    const percentages = [
        { title: "Experience", value: 98 },
        { title: "Reliable", value: 86 },
        { title: "Skilled & Capable", value: 90 },
        { title: "Flexible", value: 80 }
    ];

    return (
        <div className="aboutus">
            <div className="aboutus-container">
                <div className="aboutus-content">
                    <h4 className="aboutus-title-main">About Us</h4>
                    <h2 className="aboutus-title">Empowering Your Travel Experience with Us</h2>
                    <p className="aboutus-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                </div>

                <div className="aboutus-percentage">
                    {percentages.map((item, index) => (
                        <div className="aboutus-percentage-container" key={index}>
                            <div className="aboutus-percentage-title-main">
                                <h3 className="aboutus-percentage-title">{item.title}</h3>
                                <h3 className="aboutus-percentage-number">{item.value}%</h3>
                            </div>
                            <div className="aboutus-percentage-bar">
                                <div className="aboutus-percentage-bar-fill-back"></div>
                                <div
                                    className="aboutus-percentage-bar-fill-front"
                                    style={{ width: `${item.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Aboutus;