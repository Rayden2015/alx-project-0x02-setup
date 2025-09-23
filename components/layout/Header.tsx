import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem 2rem',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        ALX Project 0x02 Setup
      </h2>
      <p style={{
        margin: '0.5rem 0 0 0',
        fontSize: '1rem',
        opacity: 0.8
      }}>
        Next.js Development Environment
      </p>
    </header>
  );
};

export default Header;
