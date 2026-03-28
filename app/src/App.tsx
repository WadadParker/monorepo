import { Button } from "@monorepo/ui";
import type { User } from "@monorepo/types";

const currentUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  role: "user",
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">App</h1>
        <p className="text-gray-600">Welcome, {currentUser.name}</p>
        <div className="space-x-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  );
}
