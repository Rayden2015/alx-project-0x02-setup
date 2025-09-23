import React, { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "React Learning",
      content: "Learn React step by step with simple examples and practice projects."
    },
    {
      id: 2,
      title: "Next.js Basics",
      content: "Understand how Next.js makes React development easier with built-in features."
    },
    {
      id: 3,
      title: "Component Props",
      content: "Props allow you to pass data from parent to child components, making them reusable."
    }
  ]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now(), // Simple ID generation
      title,
      content
    };
    setPosts([...posts, newPost]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the home page of our website.</p>
      
      {/* Button to open modal */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          onClick={openModal}
          style={{
            padding: '12px 24px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Add New Post
        </button>
      </div>
      
      {/* Display all posts dynamically */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '30px'
      }}>
        {posts.map((post) => (
          <Card 
            key={post.id}
            title={post.title} 
            content={post.content} 
          />
        ))}
      </div>

      {/* Modal component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleAddPost}
      />
    </div>
  );
};

export default Home;