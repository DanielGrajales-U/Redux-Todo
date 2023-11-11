export type TYPE_TODO_ID = `${string}-${string}-${string}-${string}-${string}`;
export interface TodoModel {
    id: TYPE_TODO_ID,
    task: string,
    description: string,
    completed: boolean
}