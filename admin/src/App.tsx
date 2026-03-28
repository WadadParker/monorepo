import { Button } from "@monorepo/ui";
import type { User } from "@monorepo/types";

const adminUser: User = {
  id: "0",
  name: "Admin",
  email: "admin@example.com",
  role: "admin",
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600">Logged in as {adminUser.name}</p>
        <div className="space-x-2">
          <Button variant="primary">Manage Users</Button>
          <Button variant="outline">Settings</Button>
        </div>
      </div>
    </div>
  );
}
