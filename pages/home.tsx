import React from 'react';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the home page of our website.</p>
      
      {/* Using Card components with different props */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '30px'
      }}>
        <Card 
          title="React Learning" 
          content="Learn React step by step with simple examples and practice projects." 
        />
        
        <Card 
          title="Next.js Basics" 
          content="Understand how Next.js makes React development easier with built-in features." 
        />
        
        <Card 
          title="Component Props" 
          content="Props allow you to pass data from parent to child components, making them reusable." 
        />
      </div>
    </div>
  );
};

export default Home;