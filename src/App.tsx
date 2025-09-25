
// Import hook useState để quản lý state trong functional component
import { useState } from "react";
// Import hook useEffect để thực hiện side effects (lưu dữ liệu vào localStorage)
import { useEffect } from "react";
import { useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
// Import hàm uuidv4 để tạo ID duy nhất cho mỗi todo item
import { v4 as uuidv4 } from 'uuid';
// Import component CreateNewTodo để tạo todo mới
import { CreateNewTodo } from "./components/CreateNewTodo";
// Import component TodoList để hiển thị danh sách todos
import { TodoList } from "./components/TodoList";
import { ThemeToggle } from "./components/ThemeToggle.tsx";

// Định nghĩa type TodoType với các thuộc tính:
// - id: string - ID duy nhất của todo
// - name: string - Nội dung của todo
// - isDone: boolean - Trạng thái hoàn thành của todo
// - createdAt: number - thời điểm tạo (timestamp)
export type TodoType = {id: string, name: string, isDone: boolean, createdAt: number};

// Component chính App - functional component
function App() {
  // State để lưu trữ danh sách todos với khởi tạo từ localStorage
  // Sử dụng lazy initialization với callback function để tối ưu performance
  const [todos, setTodos] = useState<TodoType[]>(() => {
    // Lấy dữ liệu từ localStorage, nếu không có thì trả về mảng rỗng
    const savetodos = JSON.parse(localStorage.getItem("todos") || "[]");
    // Kiểm tra nếu có dữ liệu đã lưu thì sử dụng, không thì trả về mảng rỗng
    if (savetodos.length > 0) {
      // Bổ sung createdAt nếu dữ liệu cũ chưa có
      return savetodos.map((t: any) => ({
        id: t.id,
        name: t.name,
        isDone: Boolean(t.isDone),
        createdAt: typeof t.createdAt === "number" ? t.createdAt : Date.now()
      }));
    }
    return [];
  });
  // State để lưu trữ nội dung todo mới đang nhập
  const [newTodo, setNewTodo] = useState<string>("");

  // Theme mode: 'light' | 'dark'
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved === 'dark' ? 'dark' : 'light';
  });

  const theme = useMemo(() => createTheme({
    palette: { mode }
  }), [mode]);

  const toggleMode = () => setMode((m) => m === 'light' ? 'dark' : 'light');

  // Hàm xử lý khi người dùng thay đổi nội dung trong input
  const onNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cập nhật state newTodo với giá trị mới từ input
    setNewTodo(e.target.value);
  };

  // Hàm xử lý khi người dùng thêm todo mới
  const onAddTodo = () => {
    // Tạo object TodoType mới với:
    // - id: uuidv4() tạo ID duy nhất
    // - name: lấy từ state newTodo
    // - isDone: false (mặc định chưa hoàn thành)
    const newTodoType : TodoType = { id: uuidv4(), name: newTodo.trim(),  isDone: false, createdAt: Date.now() };
    // Thêm todo mới vào đầu mảng todos (spread operator ...todos)
    if (newTodo.trim() === "") return;
    setTodos([ newTodoType, ...todos]);
    // Reset input về rỗng sau khi thêm
    setNewTodo("");
  };

  // Hàm cập nhật trạng thái hoàn thành của todo
  const updateTodo = (id: string, isDone: boolean) => {
    // Sử dụng map để tạo mảng mới với todo được cập nhật
    // Nếu todo.id trùng với id cần cập nhật thì:
    // - {...todo, isDone} - spread toàn bộ thuộc tính của todo và ghi đè isDone
    // - : todo - giữ nguyên todo không thay đổi
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, isDone } : todo);
    // Cập nhật state với mảng todos đã được cập nhật
    setTodos(updatedTodos);
  };

  // Hàm xóa một todo theo id
  const deleteTodo = (id: string) => {
    // Lọc bỏ todo có id trùng khớp
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    // Cập nhật state với danh sách còn lại
    setTodos(remainingTodos);
  };

  // useEffect hook để lưu todos vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    // Chuyển đổi mảng todos thành JSON string và lưu vào localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Dependency array [todos] - chỉ chạy khi todos thay đổi

  // Lưu theme mode
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  // Tính toán counters
  const total = todos.length;
  const completed = todos.filter((t) => t.isDone).length;
  const remaining = total - completed;

  // JSX return của component App
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggle mode={mode} onToggle={toggleMode} />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', py: 2 }}>
      {/* Tiêu đề ứng dụng */}
      <h1 className="mt-4 mb-2 text-center text-5xl">Todo App</h1>
      {/* Counters */}
      <div className="mb-4 flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-black" />
          <span>Total: {total}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-600" />
          <span>Completed: {completed}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-500" />
          <span>Remaining: {remaining}</span>
        </div>
      </div>
      {/* Component tạo todo mới với props:
          - newTodo: nội dung đang nhập
          - onNewTodoChange: hàm xử lý thay đổi input
          - onAddTodo: hàm thêm todo */}
      <CreateNewTodo newTodo={newTodo} onNewTodoChange={onNewTodoChange} onAddTodo={onAddTodo} />
      {/* Component hiển thị danh sách todos với props:
          - todos: mảng todos
          - updateTodo: hàm cập nhật trạng thái todo
          - deleteTodo: hàm xóa todo */}
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </Box>
    </ThemeProvider>
  );
}

// Export default component App để có thể import ở file khác
export default App;