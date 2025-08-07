import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <div className="mt-12 shadow-md">
          <Sidebar />
        </div>
        <main className="flex-1 ml-[45px]">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-8 h-8 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                  <p className="text-gray-600">Loading...</p>
                </div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
