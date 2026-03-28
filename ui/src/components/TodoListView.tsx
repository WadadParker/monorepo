import React from "react";

type Todo = {
  id: number;
  title: string;
};

type Props = {
  todos: Todo[];
  loading: boolean;
};

const TodoListView = ({ todos, loading }: Props) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoListView;