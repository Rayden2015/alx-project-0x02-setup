import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="ALX Project 0x02" subtitle="Next.js Setup and Basics" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Users Page</h1>
          <p className="text-lg text-gray-600">
            Here are some sample users fetched from JSONPlaceholder API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
}
