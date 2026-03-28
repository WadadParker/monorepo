import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);

      const response = await fetch("/api/todos");
      const data = await response.json();

      setTodos(data);
      setLoading(false);
    };

    loadTodos();
  }, []);

  return { todos, loading };
};

export default useTodos;