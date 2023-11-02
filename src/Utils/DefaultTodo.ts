export const DefaultTodo = (task: string, description: string) => {
    
    const generateId = () => {
        return Math.floor(Math.random() * 1000)
    }

    const id = generateId()

    return {
        id: id,
        task,
        description,
        completed: false
    }
}