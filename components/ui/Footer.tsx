// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-white text-black py-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            We are committed to providing the best banking experience with secure and innovative solutions. Learn more about our services and values.
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="list-none text-sm">
            <li><a href="#" className="hover:underline">Online Banking</a></li>
            <li><a href="#" className="hover:underline">Credit Cards</a></li>
            <li><a href="#" className="hover:underline">Loans</a></li>
            <li><a href="#" className="hover:underline">Investment Services</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
            123 Banking St,<br />
            Financial City, FC 12345<br />
            <a href="mailto:support@bankingapp.com" className="hover:underline">support@bankingapp.com</a><br />
            (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
