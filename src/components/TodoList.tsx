
import { Todo } from "./Todo";
import { type TodoType } from "../App";
export const TodoList = ({
  todos, 
  updateTodo
}: {
  todos: TodoType[], 
  updateTodo: (id: string, isDone: boolean) => void
}) => {
  return (
    <div>
        {todos.map((todo) => (
          <Todo 
          key={todo.id} 
          name={todo.name} 
          isDone={todo.isDone} 
          updateTodo={updateTodo} 
          id={todo.id} />
        ))}
      </div>
  )
}
