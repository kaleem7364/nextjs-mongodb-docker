import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
