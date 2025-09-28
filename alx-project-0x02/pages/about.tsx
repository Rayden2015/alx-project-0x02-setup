import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="ALX Project 0x02" subtitle="Next.js Setup and Basics" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Page</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-600 mb-4">
              This is the About page of our Next.js learning project. Here you can learn more about 
              the technologies and concepts we're exploring.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              This project demonstrates various Next.js and React concepts including:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Component-based architecture</li>
              <li>TypeScript integration</li>
              <li>Tailwind CSS styling</li>
              <li>Routing with Pages Router</li>
              <li>State management</li>
              <li>API integration</li>
              <li>Modal components</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Examples</h2>
            <p className="text-gray-600 mb-4">
              Here are examples of our reusable Button component with different sizes and shapes:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Small Buttons</h3>
                <div className="flex gap-4">
                  <Button size="small" shape="rounded-sm">Small Rounded</Button>
                  <Button size="small" shape="rounded-md">Small Medium</Button>
                  <Button size="small" shape="rounded-full">Small Full</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Medium Buttons</h3>
                <div className="flex gap-4">
                  <Button size="medium" shape="rounded-sm">Medium Rounded</Button>
                  <Button size="medium" shape="rounded-md">Medium Medium</Button>
                  <Button size="medium" shape="rounded-full">Medium Full</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Large Buttons</h3>
                <div className="flex gap-4">
                  <Button size="large" shape="rounded-sm">Large Rounded</Button>
                  <Button size="large" shape="rounded-md">Large Medium</Button>
                  <Button size="large" shape="rounded-full">Large Full</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
