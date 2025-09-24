import { TextField } from "@mui/material"
import { Button } from "@mui/material"


export const CreateNewTodo = ({
    newTodo,
    onNewTodoChange,
    onAddTodo
}: {
    newTodo: string,
    onNewTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onAddTodo: () => void
}) => {
  return (
    <div>
        <TextField label="Todo" size="small" value={newTodo} onChange={onNewTodoChange} />
        <Button variant="contained" onClick={onAddTodo}>Thêm</Button>
    </div>
  )
}
