import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="ALX Project 0x02" subtitle="Next.js Setup and Basics" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Posts Page</h1>
          <p className="text-lg text-gray-600">
            Here are some sample posts fetched from JSONPlaceholder API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();

    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
