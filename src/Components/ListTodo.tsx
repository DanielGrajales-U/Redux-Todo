import { useSelector } from 'react-redux';
import { AppStore } from '../Redux/store';
import {
  ActionsTodo,
  ContentTodos,
  DescriptionTodo,
  ListTodos,
  SubTittle,
  Task,
  TodoItem,
  TodoItemHeader,
} from '../Styled-Components';
import { ButtonCompleted } from '.';
import ButtonToDelete from './ButtonToDelete';

export default function ListTodo() {
  const todoState = useSelector((store: AppStore) => store.todo);

  return (
    <ContentTodos>
      <ListTodos>
        <SubTittle>Completed ✔️</SubTittle>
        {todoState.map((item) =>
          item.completed ? (
            <TodoItem key={item.id}>
              <TodoItemHeader>
                <Task>{item.task}</Task>
                <DescriptionTodo defaultValue={item.description} readOnly />
              </TodoItemHeader>
              <ActionsTodo>
                <ButtonCompleted id={item.id} text={'Incompleted →'} />
                <ButtonToDelete id={item.id} />
              </ActionsTodo>
            </TodoItem>
          ) : null
        )}
      </ListTodos>
      <ListTodos>
        <SubTittle>Incompleted ❌</SubTittle>
        {todoState.map((item) =>
          !item.completed ? (
            <TodoItem key={item.id}>
              <TodoItemHeader>
                <Task>{item.task}</Task>
                <DescriptionTodo defaultValue={item.description} readOnly />
              </TodoItemHeader>
              <ActionsTodo>
                <ButtonCompleted id={item.id} text='← Completed' />
                <ButtonToDelete id={item.id} />
              </ActionsTodo>
            </TodoItem>
          ) : null
        )}
      </ListTodos>
    </ContentTodos>
  );
}
