
// Import component Todo để hiển thị từng todo item
import { Todo } from "./Todo";
// Import type TodoType từ App.tsx để định nghĩa kiểu dữ liệu
import { type TodoType } from "../App";

// Component TodoList - hiển thị danh sách tất cả todos
// Sử dụng destructuring để nhận props từ component cha
export const TodoList = ({
  // todos: TodoType[] - mảng chứa tất cả todos
  todos, 
  // updateTodo: function - hàm cập nhật trạng thái todo
  updateTodo,
  // deleteTodo: function - hàm xóa todo
  deleteTodo
}: {
  // TypeScript interface định nghĩa kiểu dữ liệu cho props
  todos: TodoType[], 
  updateTodo: (id: string, isDone: boolean) => void,
  deleteTodo: (id: string) => void
}) => {
  // JSX return của component TodoList
  return (
    <div className="mx-auto flex w-[min(100%,_720px)] flex-col gap-3">
        {/* Sử dụng map() để render từng todo trong mảng todos
            map() trả về một mảng các JSX elements */}
        {todos.map((todo) => (
          // Component Todo với các props:
          // - key={todo.id}: prop key duy nhất cho React để tối ưu rendering
          // - name={todo.name}: nội dung todo
          // - isDone={todo.isDone}: trạng thái hoàn thành
          // - updateTodo={updateTodo}: hàm cập nhật (pass down từ App)
          // - deleteTodo={deleteTodo}: hàm xóa todo (pass down từ App)
          // - id={todo.id}: ID duy nhất của todo
          <Todo 
          key={todo.id} 
          name={todo.name} 
          isDone={todo.isDone}
          createdAt={todo.createdAt}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          id={todo.id} />
        ))}
      </div>
  )
}
