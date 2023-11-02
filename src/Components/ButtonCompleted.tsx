import { useTodo } from "../Hooks";
import { ButtonToggle } from "../Styled-Components";

export interface Props{
    text: string;
    id: number
}

export default function ButtonCompleted({text, id}: Props) {

  const { toggle }= useTodo()

  return (
    <ButtonToggle onClick={() => toggle(id)}>
      {text}
    </ButtonToggle>
  )
}
