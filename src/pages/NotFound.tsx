import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-4 text-blue-600 hover:text-blue-800">
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
