import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '300px'
    }}>
      <h3 style={{
        margin: '0 0 10px 0',
        color: '#333',
        fontSize: '1.2rem'
      }}>
        {title}
      </h3>
      <p style={{
        margin: '0',
        color: '#666',
        lineHeight: '1.5'
      }}>
        {content}
      </p>
    </div>
  );
};

export default Card;
