import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ 
  size, 
  shape, 
  children, 
  onClick, 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const colorClasses = 'bg-blue-600 hover:bg-blue-700 text-white';

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses}
        ${colorClasses}
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
