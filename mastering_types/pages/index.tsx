import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/Layout';
import Button from '@/components/common/Button';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/features');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <Layout 
      title="Splash App - AI-Powered Applications"
      description="Building the future of AI-powered applications with modern web technologies"
    >
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Splash App
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the power of modern web development with our AI-powered platform. 
              Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and developer experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="px-8 py-4"
              >
                Get Started
              </Button>
              <Button 
                onClick={handleLearnMore}
                variant="secondary"
                size="lg"
                className="px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Built with Next.js for optimal performance and SEO optimization.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Type Safe</h3>
              <p className="text-gray-600">
                Full TypeScript support for better development experience and fewer bugs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful Design</h3>
              <p className="text-gray-600">
                Modern UI with Tailwind CSS for responsive and accessible design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
