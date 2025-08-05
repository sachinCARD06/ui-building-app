import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader';
import AuthFooter from '../components/AuthFooter';
import { LockKeyhole, UserPlus } from 'lucide-react';

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
      return <LockKeyhole className="w-8 h-8 text-white" strokeWidth={2} />;
    }
    if (isRegisterPage) {
      return <UserPlus className="w-8 h-8 text-white" strokeWidth={2} />;
    }
    return <LockKeyhole className="w-8 h-8 text-white" strokeWidth={2} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <AuthHeader />

      <div className="flex justify-center flex-1 min-h-screen p-8">
        <div className="w-full max-w-md">
          <div className="p-8 border shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl border-white/20">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                {getPageIcon()}
              </div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900">
                {getPageTitle()}
              </h1>
              <p className="text-gray-600">{getPageSubtitle()}</p>
            </div>

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
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
