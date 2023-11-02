import { FormEvent } from 'react';
import { AppContent, Header, Tittle } from './Styled-Components';
import FormTodo from './Components/FormTodo';
import { useTodo } from './Hooks';
import ListTodo from './Components/ListTodo';

export default function App() {
  const { AddTodo } = useTodo();

  const submit = (evt: FormEvent, task: string, description: string) => {
    evt.preventDefault();
    AddTodo(task, description);
  };

  return (
    <AppContent>
      <Header>
        <Tittle>TODO</Tittle>
        <FormTodo onSubmit={submit} />
      </Header>
      <ListTodo />
    </AppContent>
  );
}
