import { Button } from "@mui/material"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Icon = ({ 
  isDone, 
  updateTodo, 
  id,
}: { 
    isDone: boolean, 
    updateTodo: (id: string, isDone: boolean) => void, 
    id: string 
  }) => {
  return (
    <div onClick={() => updateTodo(id, !isDone)}>{isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</div>
  )
}

export const Todo = ({ 
  name, 
  isDone, 
  updateTodo, 
  id,
}: { 
    name: string, 
    isDone: boolean, 
    updateTodo: (id: string, isDone: boolean) => void, 
    id: string
  }) => {
  return (
    <Button 
    style={{ justifyContent: "space-between" }} 
    fullWidth={true} 
    endIcon={<Icon isDone={isDone} 
    updateTodo={updateTodo} id={id} />}>
      {name}
    </Button>
  )
}
