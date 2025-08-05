import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { rootRoutes } from './routes/rootRoutes';

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen">{children}</div>;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={rootRoutes} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
