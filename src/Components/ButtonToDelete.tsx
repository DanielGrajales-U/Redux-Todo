
import { useTodo } from "../Hooks";
import { ButtonDelete } from "../Styled-Components";
import { TYPE_TODO_ID } from "../models";

export interface Props{
    id: TYPE_TODO_ID
}

export default function ButtonToDelete({id}: Props) {

  const { deleteToTodo }= useTodo()

  return (
    <ButtonDelete onClick={() => deleteToTodo(id)}>
      Delete 🗑️
    </ButtonDelete>
  )
}
