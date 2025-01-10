import React from "react";
import "./footer.css";
function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2 className="footer-main-title">Ashlesha Cabs</h2>
                    <p className="footer-description">Let Ashlesha Cabs make every trip memorable. Your destination is just a ride away with us!</p>

                    <div className="footer-social">
                        <ul>
                            <li><img src="/icon/phone.png" alt="phone number" /><a >+91 9741494230, +91 8310311913</a></li>
                            <li><img src="/icon/mail.png" alt="mail" /><a >dineshkalleri85@gmail.com</a></li>
                            <li>
                            <img src="/icon/loc.png" alt="map" /><a >Kukke Subrahmanya, Kadaba Taluk, D. K, 574 238</a></li>
                        </ul>
                    </div>
                </div>


                <div className="footer-content">
                    <h2 className="footer-title-others">Pickup Locations</h2>
                    <div className="footer-title-others-list">
                        <ul>
                            <li><a >Kukke Subrahmanya</a></li>
                            <li><a >Mangalore Airport</a></li>
                            <li><a >Railway Station</a></li>
                            <li><a >Madikeri</a></li>
                            <li><a >Sullia</a></li>
                            <li><a >Puttur</a></li>
                            <li><a >Dharmastala</a></li>
                            <li><a >Mangalore City</a></li>
                            <li><a >Bangalore Airport</a></li>
                            <li><a >AND MANY MORE....</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-content quick-links">
                    <h2 className="footer-title-others">Quick Links</h2>
                    <div className="footer-title-others-list">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Book Now</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Cars</a></li>
                            <li><a href="#">Places To Visit</a></li>
                            
                        </ul>
                    </div>
                </div>
               

            </div>

            <div className="footer-copyright">
                <p>Copyright &copy; 2025 Ashlesha Cabs || Designed & Developed by PAPERLIGHT TECH</p>
            </div>
        </div>
    );
}

export default Footer;