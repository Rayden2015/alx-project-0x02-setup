import React from 'react';
import Header from '../components/layout/Header';
import { WelcomeProps } from '../interfaces';

const WelcomeMessage: React.FC<WelcomeProps> = ({ 
  title = "Welcome to ALX Project 0x02 Setup! 🚀",
  subtitle = "This is your Next.js project setup. You're ready to start building amazing web applications!",
  showHeader = true
}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {showHeader && <Header title="ALX Project 0x02 Setup" subtitle="Next.js Development Environment" />}
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: showHeader ? 'calc(100vh - 80px)' : '100vh',
        padding: '20px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          {subtitle}
        </p>
        <div style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          Happy Coding! 💻
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
