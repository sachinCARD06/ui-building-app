import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader';
import AuthFooter from '../components/AuthFooter';

const AuthLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes('/login');
  const isRegisterPage = location.pathname.includes('/register');

  const getPageTitle = () => {
    if (isLoginPage) return 'Welcome Back';
    if (isRegisterPage) return 'Create Account';
    return 'Welcome';
  };

  const getPageSubtitle = () => {
    if (isLoginPage) return 'Sign in to your account to continue';
    if (isRegisterPage) return 'Join us and start your journey';
    return 'Welcome to our platform';
  };

  const getPageIcon = () => {
    if (isLoginPage) {
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    }
    if (isRegisterPage) {
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      );
    }
    return (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <AuthHeader />

      {/* Main Content */}
      <div className="flex justify-center flex-1 min-h-screen p-8">
        {/* Main Auth Container */}
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="p-8 border shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl border-white/20">
            {/* Card Header */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                {getPageIcon()}
              </div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900">
                {getPageTitle()}
              </h1>
              <p className="text-gray-600">{getPageSubtitle()}</p>
            </div>

            {/* Auth Content */}
            <div className="space-y-6">
              <Outlet />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Having trouble?{' '}
              <Link
                to="/contact-support"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
