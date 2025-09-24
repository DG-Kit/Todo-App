
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";


export type TodoType = {id: string, name: string, isDone: boolean};

function App() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const savetodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (savetodos.length > 0) {
      return savetodos;
    }
    return [];
  });
  const [newTodo, setNewTodo] = useState<string>("");

  const onNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onAddTodo = () => {
    const newTodoType : TodoType = { id: uuidv4(), name: newTodo,  isDone: false };
    setTodos([newTodoType, ...todos]);
    setNewTodo("");
  };

  const updateTodo = (id: string, isDone: boolean) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, isDone } : todo);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo App</h1>
      <CreateNewTodo newTodo={newTodo} onNewTodoChange={onNewTodoChange} onAddTodo={onAddTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;