import { useTodo } from "../Hooks";
import { ButtonToggle } from "../Styled-Components";
import { TYPE_TODO_ID } from "../models";

export interface Props{
    text: string;
    id: TYPE_TODO_ID
}

export default function ButtonCompleted({text, id}: Props) {

  const { toggle }= useTodo()

  return (
    <ButtonToggle onClick={() => toggle(id)}>
      {text}
    </ButtonToggle>
  )
}
