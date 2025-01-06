
import React from 'react';
import './header.css';


function Header() {
    return (
        <header className="header">
            <div className='coupon'><h3 className='coupon-text'>Get 50% off on your first ride</h3></div>
            <div className="container">
                <div className="logo">TraviCabs</div>
                <div className='navbar'>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Help</a></li>
                        <li><button className="register-btn">Register</button></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;


