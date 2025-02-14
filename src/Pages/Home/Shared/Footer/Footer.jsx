import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="p-8 text-white bg-pink-200">
        <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h5 className="mb-4 text-xl font-semibold">About Us</h5>
            <p className="text-sm">We are a creative agency dedicated to bringing innovative solutions to your personal life.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="mb-4 text-xl font-semibold">Quick Links</h5>
            <ul className="text-sm">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-indigo-400">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="mb-4 text-xl font-semibold">Contact</h5>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">Email: contact@yourdomain.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Column 4 (Social Media) */}
          <div>
            <h5 className="mb-4 text-xl font-semibold">Follow Us</h5>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" target="_blank" className="hover:text-indigo-400">
                <FaFacebook size={24} />
              </Link>
              <Link to="https://twitter.com" target="_blank" className="hover:text-indigo-400">
                <FaTwitter size={24} />
              </Link>
              <Link to="https://instagram.com" target="_blank" className="hover:text-indigo-400">
                <FaInstagram size={24} />
              </Link>
              <Link to="https://linkedin.com" target="_blank" className="hover:text-indigo-400">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 mt-8 text-sm text-center border-t border-indigo-500">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
