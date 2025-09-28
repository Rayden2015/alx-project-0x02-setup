import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/Layout';
import Button from '@/components/common/Button';

const Custom404: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout 
      title="404 - Page Not Found | Splash App"
      description="The page you are looking for could not be found."
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. 
              The page might have been moved, deleted, or doesn&apos;t exist.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGoHome}
              size="lg"
              className="px-8 py-3"
            >
              Go Home
            </Button>
            <Button 
              onClick={handleGoBack}
              variant="secondary"
              size="lg"
              className="px-8 py-3"
            >
              Go Back
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-sm text-gray-500">
              If you believe this is an error, please{' '}
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                contact support
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
