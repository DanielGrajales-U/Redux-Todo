import { useState } from 'react';
import { FormAddTodo, InputAddTodo, AddButton, InputDescriptionTodo } from '../Styled-Components';

export interface Props {
    onSubmit: Function
}

export default function FormTodo({onSubmit}: Props) {

  const [ task, setTask ] = useState('')
  const [ description, setDescription ] = useState('')
  
  return (
    <aside>
      <FormAddTodo onSubmit={(e) => onSubmit(e, task, description)} aria-label='Añadir un Todo'>
        <InputAddTodo onChange={(e) => setTask(e.target.value)} name='task' placeholder='Todo' />
        <InputDescriptionTodo onChange={(e) => setDescription(e.target.value)} placeholder='Description' name='description'/>
        <AddButton>Add Todo</AddButton>
      </FormAddTodo>
    </aside>
  );
}
