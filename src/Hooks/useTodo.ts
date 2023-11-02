
import { useDispatch } from "react-redux"
import { addTodo, deleteTodo, toggleTodo } from "../Redux/State/TodoSlice"
import { DefaultTodo } from "../Utils"


export default function useTodo() {
  const distpath = useDispatch()

  const AddTodo = (task: string, description: string) => {
    const data = DefaultTodo(task, description)
    distpath(addTodo(data))
  }

  const toggle = (todoId: number) => {
    distpath(toggleTodo(todoId))
  }

  const deleteToTodo = (todoId: number) => {
    distpath(deleteTodo(todoId))
  } 
  
  return {
    AddTodo,
    toggle,
    deleteToTodo
  }
}
