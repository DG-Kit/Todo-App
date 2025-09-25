// Import component Button từ Material-UI để tạo button
import { Button, IconButton } from "@mui/material"
// Import icon checkbox rỗng từ Material-UI icons
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// Import icon checkbox đã check từ Material-UI icons
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// Import icon xóa từ Material-UI icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Component Icon - hiển thị icon checkbox và xử lý click
// Sử dụng destructuring để nhận props
const Icon = ({ 
  // isDone: boolean - trạng thái hoàn thành của todo
  isDone, 
  // updateTodo: function - hàm cập nhật trạng thái todo
  updateTodo, 
  // id: string - ID của todo để xác định cần cập nhật todo nào
  id,
}: { 
    // TypeScript interface định nghĩa kiểu dữ liệu cho props
    isDone: boolean, 
    updateTodo: (id: string, isDone: boolean) => void, 
    id: string 
  }) => {
  // JSX return của component Icon
  return (
    // div container với onClick handler
    // onClick={() => updateTodo(id, !isDone)}: 
    // - Gọi hàm updateTodo với id và trạng thái đảo ngược (!isDone)
    <div onClick={() => updateTodo(id, !isDone)} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      {/* Conditional rendering (toán tử 3 ngôi):
          - Nếu isDone = true thì hiển thị CheckBoxIcon (checkbox đã check)
          - Nếu isDone = false thì hiển thị CheckBoxOutlineBlankIcon (checkbox rỗng) */}
      {isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  )
}

// Component Todo - hiển thị một todo item
// Sử dụng destructuring để nhận props từ component cha
export const Todo = ({ 
  // name: string - nội dung của todo
  name, 
  // isDone: boolean - trạng thái hoàn thành của todo
  isDone, 
  // createdAt: number - thời điểm tạo
  createdAt,
  // updateTodo: function - hàm cập nhật trạng thái todo
  updateTodo, 
  // deleteTodo: function - hàm xóa todo
  deleteTodo,
  // id: string - ID duy nhất của todo
  id,
}: { 
    // TypeScript interface định nghĩa kiểu dữ liệu cho props
    name: string, 
    isDone: boolean, 
    createdAt: number,
    updateTodo: (id: string, isDone: boolean) => void,
    deleteTodo: (id: string) => void,
    id: string
  }) => {
  // JSX return của component Todo
  return (
    <Button 
    // Inline style: justifyContent: "space-between" để căn đều nội dung và icon
    className="justify-between rounded-lg p-4 shadow-sm normal-case"
    color="inherit"
    // fullWidth={true}: button chiếm toàn bộ chiều rộng container
    fullWidth={true}>
      <div className="flex w-full items-center justify-between">
        {/* Nội dung và timestamp (bên trái) */}
        <div className="flex flex-col items-start">
          <span className="text-base font-medium">{name}</span>
          <span className="text-xs opacity-70">
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>
        {/* Nhóm icon (bên phải) */}
        <div className="flex items-center gap-2">
          <Icon isDone={isDone} updateTodo={updateTodo} id={id} />
          <IconButton aria-label="Xóa todo" size="small" onClick={(e) => { e.stopPropagation(); deleteTodo(id); }} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </Button>
  )
}
