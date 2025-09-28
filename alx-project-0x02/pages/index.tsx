import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="ALX Project 0x02" subtitle="Next.js Setup and Basics" />
      
      <main className={`${geistSans.className} ${geistMono.className} font-sans container mx-auto px-4 py-8`}>
        <div className="text-center mb-12">
          <Image
            className="dark:invert mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Next.js Learning Project
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This project demonstrates various Next.js and React concepts including component creation, 
            routing, state management, and API integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/home"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Explore Home Page
            </Link>
            <Link
              href="/about"
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Components</h3>
            <p className="text-gray-600 mb-4">
              Learn about reusable React components and how to create them with TypeScript.
            </p>
            <Link href="/home" className="text-blue-600 hover:text-blue-800 font-medium">
              View Components →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Routing</h3>
            <p className="text-gray-600 mb-4">
              Explore Next.js Pages Router and how to navigate between different pages.
            </p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              See Routing →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">API Integration</h3>
            <p className="text-gray-600 mb-4">
              Discover how to fetch data from external APIs and display it in your components.
            </p>
            <Link href="/posts" className="text-blue-600 hover:text-blue-800 font-medium">
              View API Data →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Start</h2>
          <ol className="font-mono list-inside list-decimal text-sm text-left max-w-md mx-auto space-y-2">
            <li className="tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                pages/index.tsx
              </code>
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
            <li className="tracking-[-.01em]">
              Explore the different pages and components.
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
