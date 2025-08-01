import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import ContactSupport from '../pages/ContactSupport';
import PrivacyPolicy from '../pages/PrivacyPolicy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Public routes - accessible without login
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'services',
            element: <Services />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'contact-support',
            element: <ContactSupport />,
          },
          {
            path: 'privacy-policy',
            element: <PrivacyPolicy />,
          },
        ],
      },
      // Auth routes - login/register pages
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
          {
            path: 'contact-support',
            element: <ContactSupport />,
          },
          {
            path: 'privacy-policy',
            element: <PrivacyPolicy />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
