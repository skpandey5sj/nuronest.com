import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 px-6 md:px-20 py-12 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-500">Nuro</span>nest
          </h2>
          <p className="mb-4">
            Comprehensive digital services combining design, marketing, and AI technologies to elevate your business.
          </p>
          <div className="flex gap-4 text-xl text-white">
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/design-branding" className=" hover:underline">
                Design & Branding
              </Link>
            </li>
            <li>
              <Link to="/social-media-marketing" className=" hover:underline">
                Social Media & Marketing
              </Link>
            </li>
            <li>
              <Link to="/ai-solutions" className=" hover:underline">
                AI / Data Science Solutions
              </Link>
            </li>
            <li>
              <Link to="/consulting-custom" className=" hover:underline">
                Consulting & Custom Solutions
              </Link>
            </li>
            <li>
              <Link to="/web-app-development" className=" hover:underline">
                Web & App Development
              </Link>
            </li>
            <li>
              <Link to="/app-development" className=" hover:underline">
                 App Development
              </Link>
            </li>
          </ul>

        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to='/About'>About Us</Link>
            </li>
            <li>
              <Link to='/Projects'>Projects</Link>
            </li>
            <li>
              <Link to='/Testimonials'>Testimonials</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>

            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-md text-blue-600 text-bold bg-white w-full focus:outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700 text-white">
              Subscribe
            </button>
          </div>
          {/* <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="data:image/png;base64,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" alt="Amex" className="h-6" />
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2025 Nuronest. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
