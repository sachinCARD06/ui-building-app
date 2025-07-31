import { Link } from 'react-router-dom';

const AuthFooter = () => {
  return (
    <footer className="py-6 text-white bg-gray-800 border-t backdrop-blur-sm border-white/20">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">About Us</h3>
            <p className="text-sm text-white">
              We are a team of developers who are passionate about creating
              beautiful and functional web applications.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white transition-colors hover:text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white transition-colors hover:text-gray-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white transition-colors hover:text-gray-800"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white transition-colors hover:text-gray-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              Contact Us
            </h3>
            <p className="text-sm text-white">Email: info@company.com</p>
            <p className="text-sm text-white">Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="pt-4 mt-6 border-t border-gray-200/50">
          <div className="flex flex-col items-center justify-between text-xs text-white sm:flex-row">
            <div className="flex items-center mb-2 space-x-2 sm:mb-0">
              <span>© 2024 Company</span>
              <span>•</span>
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-blue-600"
              >
                Privacy
              </Link>
              <span>•</span>
              <Link
                to="/terms"
                className="transition-colors hover:text-blue-600"
              >
                Terms
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/help"
                className="transition-colors hover:text-blue-600"
              >
                Help
              </Link>
              <Link
                to="/contact"
                className="transition-colors hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
