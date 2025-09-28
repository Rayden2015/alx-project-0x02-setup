import React from 'react';
import Link from 'next/link';
import { HeaderProps } from '../../interfaces';

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-300 text-lg">{subtitle}</p>
          )}
        </div>
        
        {/* Navigation Links */}
        <nav className="mt-6 flex justify-center space-x-4">
          <Link 
            href="/" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/home" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            Home Page
          </Link>
          <Link 
            href="/about" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="/posts" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            Posts
          </Link>
          <Link 
            href="/users" 
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
