import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container bg-gradient-to-r from-emerald-200 via-yellow-50 shadow-lg p-4">
            <div className="footer flex justify-between">
                <div className="company-info text-black">
                    <h2 className="text-2xl font-bold">Foodies</h2>
                    <p>Foodies Deliver: Savor the Flavor, Delivered to Your Doorstep!</p>
                    <p className="text-sm">&copy; 2023 Foodies. All Rights Reserved.</p>
                </div>
                <div className="address text-black">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p>BTM Layout, Bangalore, India</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
