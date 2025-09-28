import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { CardProps } from '../interfaces';

export default function Home() {
  const [cards, setCards] = useState<CardProps[]>([
    {
      title: "Welcome to Home Page",
      content: "This is the home page of our Next.js application. Here you can see various components in action."
    },
    {
      title: "Getting Started",
      content: "Learn how to use this application by exploring the different pages and components available."
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (title: string, content: string) => {
    const newCard: CardProps = { title, content };
    setCards([...cards, newCard]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="ALX Project 0x02" subtitle="Next.js Setup and Basics" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Home Page</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our Next.js learning project. This page demonstrates various components and features.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Add New Card
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
}
