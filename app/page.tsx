import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Next.js with MongoDB</h1>
      <div className="flex space-x-4">
        <Link href="/api/users" className="bg-blue-500 text-white px-4 py-2 rounded">
          View Users (API)
        </Link>
        <Link href="/users" className="bg-green-500 text-white px-4 py-2 rounded">
          Users Page
        </Link>
      </div>
    </div>
  );
}
