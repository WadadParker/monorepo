import express from "express";
import type { User, ApiResponse } from "@monorepo/types";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/api/users", (_req, res) => {
  const users: User[] = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "user" },
    { id: "2", name: "Admin", email: "admin@example.com", role: "admin" },
  ];

  const response: ApiResponse<User[]> = {
    data: users,
    success: true,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
