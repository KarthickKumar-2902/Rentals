import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        {/* About Us Section */}
        <div className="footer_about">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">We are a leading provider of room bookings, offering a wide range of accommodations to suit your needs.</p>
          <p>
            Contact us at:{' '}
            <a href="mailto:rentals@gmail.com" className="text-blue-400 hover:underline">rentals@gmail.com</a>
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer_links">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/rooms" className="text-gray-400 hover:text-white">Rooms</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer_legal">
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer_social">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social_icon">
              <img src="/path/to/facebook-icon.png" alt="Facebook" className="w-6 h-6"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social_icon">
              <img src="/path/to/twitter-icon.png" alt="Twitter" className="w-6 h-6"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social_icon">
              <img src="/path/to/instagram-icon.png" alt="Instagram" className="w-6 h-6"/>
            </a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="footer_newsletter">
          <h2 className="text-lg font-semibold mb-4">Newsletter Signup</h2>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="p-2 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer_bottom text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} RS-Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
