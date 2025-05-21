import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        
        {/* Contact Info */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 ">Contact Us</h3>
          <p>Email: support@findmate.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Terms & Conditions */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/terms" className="hover:text-amber-500 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-amber-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-amber-500 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-2xl justify-center-safe">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white mt-8">
        &copy; {new Date().getFullYear()} FindMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
