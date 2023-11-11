
import { useDispatch } from "react-redux"
import { addTodo, deleteTodo, toggleTodo } from "../Redux/State/TodoSlice"
import { DefaultTodo } from "../Utils"
import { TYPE_TODO_ID } from "../models"


export default function useTodo() {
  const distpath = useDispatch()

  const AddTodo = (task: string, description: string) => {
    const data = DefaultTodo(task, description)
    distpath(addTodo(data))
  }

  const toggle = (todoId: TYPE_TODO_ID) => {
    distpath(toggleTodo(todoId))
  }

  const deleteToTodo = (todoId: TYPE_TODO_ID) => {
    distpath(deleteTodo(todoId))
  } 
  
  return {
    AddTodo,
    toggle,
    deleteToTodo
  }
}
