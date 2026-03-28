import { TodoListView } from "@monorepo/ui";
import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const {todos,loading} = useTodos();

  return (
  <TodoListView
    todos={todos}
    loading={loading}
  />
  );
}

export default TodoList