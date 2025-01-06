import React from "react";
import "./footer.css";
function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h1 className="footer-main-title">TraviCabs</h1>
                    <p className="footer-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>

                    <div className="footer-social">
                        <ul>
                            <li><img src="/icon/phone.png" alt="facebook" /><a href="#">123456789</a></li>
                            <li><img src="/icon/mail.png" alt="facebook" /><a href="#">demo@gmail.com</a></li>
                            <li>
                            <img src="/icon/loc.png" alt="facebook" /><a href="#">subramanya</a></li>
                        </ul>
                    </div>
                </div>


                <div className="footer-content">
                    <h1 className="footer-title-others">About</h1>
                    <div className="footer-title-others-list">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content">
                    <h1 className="footer-title-others">Support</h1>
                    <div className="footer-title-others-list">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content">
                    <h1 className="footer-title-others">Faq</h1>
                    <div className="footer-title-others-list">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footer-copyright">
                <p>Copyright &copy; 2025 Paperlight Tech</p>
            </div>
        </div>
    );
}

export default Footer;