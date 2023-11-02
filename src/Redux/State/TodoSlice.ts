import { createSlice } from '@reduxjs/toolkit'

export const StateTodoEmpty = [
    {
        id: 1,
        task: "Todo",
        description: "To-do list",
        completed: false
    },
    {
        id: 2,
        task: "Terminar este proyecto",
        description: "Terminar este proyecto para montarlo en el Git",
        completed: false
    },
    {
        id: 3,
        task: "Aprender Redux",
        description: "Aprender los conceptos basicos de Redux y practicarlos",
        completed: true
    }
]

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: StateTodoEmpty,
    reducers: {
        addTodo: (state, action) => { state.push(action.payload) },
        deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
        updateTodo: (state, action) => {
            state[action.payload.id] = action.payload
        },
        toggleTodo: (state, action) => {
            const todoToToggle = state.find(todo => todo.id === action.payload)
            if(todoToToggle){
                todoToToggle.completed =!todoToToggle.completed
            }
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo, updateTodo } = TodoSlice.actions

export default TodoSlice.reducer