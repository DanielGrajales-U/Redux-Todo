import { createSlice } from '@reduxjs/toolkit'
import { TodoModel } from '../../models'

export const StateTodoEmpty: TodoModel[] = []

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