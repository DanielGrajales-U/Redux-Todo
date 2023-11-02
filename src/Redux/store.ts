import { configureStore } from "@reduxjs/toolkit";
import { TodoModel } from "../models";
import TodoSlice from "./State/TodoSlice";


export interface AppStore{
    todo: TodoModel[];
}

export default configureStore<AppStore>({
    reducer: {
        todo: TodoSlice
    }
})