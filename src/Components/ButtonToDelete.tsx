
import { useTodo } from "../Hooks";
import { ButtonDelete } from "../Styled-Components";

export interface Props{
    id: number
}

export default function ButtonToDelete({id}: Props) {

  const { deleteToTodo }= useTodo()

  return (
    <ButtonDelete onClick={() => deleteToTodo(id)}>
      Delete 🗑️
    </ButtonDelete>
  )
}
