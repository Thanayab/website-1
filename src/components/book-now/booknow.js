import React, { useState } from "react";
import "./booknow.css";

function Booknow() {
    const [activeTab, setActiveTab] = useState("local"); // State to manage active tab

    // State for form fields
    const [name, setName] = useState("");
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // State for error messages
    const [errors, setErrors] = useState({
        name: "",
        fromLocation: "",
        toLocation: "",
        date: "",
        time: "",
    });

    // Function to handle tab switching
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // Clear form fields when switching tabs
        setFromLocation("");
        setToLocation("");
        setDate("");
        setTime("");
        setErrors({
            name: "",
            fromLocation: "",
            toLocation: "",
            date: "",
            time: "",
        });
    };

    // WhatsApp phone number
    const whatsappNumber = "1234567890"; // Replace with your WhatsApp number

    // Redirect to WhatsApp function
    const redirectToWhatsApp = (serviceType) => {
        const pretext = `Hi, I am ${name}. I would like to book a ${serviceType} from ${fromLocation} to ${toLocation} on ${date} at ${time}.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pretext)}`;
        window.open(url, "_blank");
    };

    // Form validation function
    const validateForm = () => {
        let formIsValid = true;
        let errorMessages = {
            name: "",
            fromLocation: "",
            toLocation: "",
            date: "",
            time: "",
        };

        if (!name) {
            formIsValid = false;
            errorMessages.name = "Name is required.";
        }
        if (!fromLocation) {
            formIsValid = false;
            errorMessages.fromLocation = "From Location is required.";
        }
        if (!toLocation) {
            formIsValid = false;
            errorMessages.toLocation = "To Location is required.";
        }
        if (!date) {
            formIsValid = false;
            errorMessages.date = "Date is required.";
        }
        if (!time) {
            formIsValid = false;
            errorMessages.time = "Time is required.";
        }

        setErrors(errorMessages);
        return formIsValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            redirectToWhatsApp(activeTab === "local" ? "Local Taxi" : "Outstation cab");
        }
    };

    return (
        <div className="booknow">
            <h2 className="booknow-title">Book the best service as per your <br /> requirement...</h2>
            <div className="booknow-container">
               
                <div className="booknow-img">
                    <img src="/img/car-1.png" alt="Car" />
                </div>

                
                <div className="booknow-form">
                
                    <div className="booknow-form-tabs">
                        <button
                            className={`booknow-form-btn ${activeTab === "local" ? "active" : ""}`}
                            onClick={() => handleTabChange("local")}
                        >
                            Local Taxi
                        </button>
                        <button
                            className={`booknow-form-btn ${activeTab === "outstation" ? "active" : ""}`}
                            onClick={() => handleTabChange("outstation")}
                        >
                            Outstation
                        </button>
                    </div>

                   
                    <div className="booknow-form-fields">
                        <input
                            type="text"
                            className="booknow-field"
                            placeholder="Your Name*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                        <input
                            type="text"
                            className="booknow-field"
                            placeholder="From Location*"
                            value={fromLocation}
                            onChange={(e) => setFromLocation(e.target.value)}
                        />
                        {errors.fromLocation && <div className="error-message">{errors.fromLocation}</div>}
                        <input
                            type="text"
                            className="booknow-field"
                            placeholder="To Location*"
                            value={toLocation}
                            onChange={(e) => setToLocation(e.target.value)}
                        />
                        {errors.toLocation && <div className="error-message">{errors.toLocation}</div>}
                        <div className="booknow-date-time">
                            <input
                                type="date"
                                className="booknow-field"
                                value={date}
                                required
                                onChange={(e) => setDate(e.target.value)}
                            />
                            {errors.date && <div className="error-message">{errors.date}</div>}
                            <input
                                type="time"
                                className="booknow-field"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            {errors.time && <div className="error-message">{errors.time}</div>}
                        </div>
                        <button
                            className="booknow-submit-btn"
                            onClick={handleSubmit}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booknow;
