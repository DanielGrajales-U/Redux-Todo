export const DefaultTodo = (task: string, description: string) => {

    return {
        id: crypto.randomUUID(),
        task,
        description,
        completed: false
    }
}