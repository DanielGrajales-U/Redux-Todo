import styled from 'styled-components';

const firstColor = '#066d89';
const secondColor = '#132D46';
const deleteColor = '#D50000';
const deleteColor2 = '#EF5350';

const setTransitionTime = (time: string) => `all ${time} ease-in-out`;

export const AppContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Header = styled.header`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
`;

export const Tittle = styled.h1`
  font-size: 60px;
  color: ${firstColor};
  width: 100%;
`;

export const FormAddTodo = styled.form`
  width: 300px;
  height: 200px;
  padding: 20px 0;
  background-color: #0003;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const InputAddTodo = styled.input`
  width: 230px;
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const InputDescriptionTodo = styled.textarea`
  width: 230px;
  height: 70px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
`;

export const AddButton = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  background-color: ${secondColor};
  transition: ${setTransitionTime('.3s')};

  &:hover {
    background-color: ${firstColor};
    cursor: pointer;
  }
`;

export const ContentTodos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #0003;
`;

export const ListTodos = styled.ul`
  max-width: 500px;
  min-width: 400px;
  height: 500px;
  overflow-y: auto;
  list-style: none;
  padding: 20px;
  margin: 5px 20px;

  &::-webkit-scrollbar{
    width: 5px;
    background-color: ${secondColor};
  }

  &::-webkit-scrollbar-thumb{
    background-color: ${firstColor};
  }
`;

export const SubTittle = styled.h2`
  font-size: 30px;
  letter-spacing: 1px;
  color: ${secondColor};
  margin: 15px 0;
`;

export const TodoItem = styled.li`
  max-width: 400px;
  min-width: 300px;
  border-radius: 10px;
  padding: 20px 10px;
  background-color: #0006;
  padding: 20px;
  margin: 15px 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation: fadeIn .8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TodoItemHeader = styled.div`
  border-bottom: 1px dashed #fefefe;
`;

export const Task = styled.h3`
  font-size: 25px;
  letter-spacing: 2px;
  color: ${firstColor};
  text-align: start;
`;

export const DescriptionTodo = styled.textarea`
  width: 100%;
  margin-top: 5px;
  height: 50px;
  resize: none;
  color: #fff;
  font-size: 15px;
  font-style: italic;
  border: none;
  outline: none;
  background-color: #000;
`;

export const ActionsTodo = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonToggle = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: ${secondColor};
  transition: ${setTransitionTime('.2s')};

  &:hover {
    background-color: ${firstColor};
    cursor: pointer;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: ${deleteColor2};
  transition: ${setTransitionTime('.2s')};

  &:hover {
    background-color: ${deleteColor};
    cursor: pointer;
  }
`;
