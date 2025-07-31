import React from 'react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  headerClassName?: string;
  mainClassName?: string;
  footerClassName?: string;
  containerClassName?: string;
  loadingFallback?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
  className = '',
  headerClassName = '',
  mainClassName = '',
  footerClassName = '',
  containerClassName = '',
  loadingFallback,
}) => {
  const defaultLoadingFallback = (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${className}`}>
      {showHeader && (
        <header className={`sticky top-0 z-50 ${headerClassName}`}>
          <Header />
        </header>
      )}

      <main className={`flex-1 ${mainClassName}`}>
        <div
          className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8 ${containerClassName}`}
        >
          <Suspense fallback={loadingFallback || defaultLoadingFallback}>
            {children || <Outlet />}
          </Suspense>
        </div>
      </main>

      {showFooter && (
        <footer className={`mt-auto ${footerClassName}`}>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;
