// Import component TextField từ Material-UI để tạo input field
import { TextField } from "@mui/material"
// Import component Button từ Material-UI để tạo button
import { Button } from "@mui/material"

// Component CreateNewTodo - dùng để tạo todo mới
// Sử dụng destructuring để nhận props từ component cha
export const CreateNewTodo = ({
    // newTodo: string - nội dung todo đang được nhập
    newTodo,
    // onNewTodoChange: function - xử lý khi người dùng thay đổi nội dung input
    onNewTodoChange,
    // onAddTodo: function - xử lý khi người dùng click nút thêm
    onAddTodo
}: {
    // TypeScript interface định nghĩa kiểu dữ liệu cho props
    newTodo: string,
    // Function nhận event từ input và trả về void
    onNewTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    // Function không nhận tham số và trả về void
    onAddTodo: () => void
}) => {
  // JSX return của component CreateNewTodo
  return (
    <div className="mx-auto mb-4 flex w-[min(100%,_720px)] items-center justify-center gap-3">
        {/* TextField component với các props:
            - placeholder thay cho label để giống thiết kế
            - size="small": kích thước nhỏ
            - value: giá trị được bind với state newTodo
            - onChange: hàm xử lý khi người dùng thay đổi nội dung */}
        <TextField placeholder="Add a new task..." size="small" value={newTodo} onChange={onNewTodoChange} fullWidth />
        {/* Button "Add" với biểu tượng + và disabled khi chuỗi rỗng */}
        <Button variant="contained" onClick={onAddTodo} disabled={newTodo.trim() === ""} 
          className="inline-flex h-10 min-w-24 items-center gap-2 rounded-lg px-4">
          <span className="-mt-0.5 text-lg leading-none">+</span>
          <span>ADD</span>
        </Button>
    </div>
  )
}
