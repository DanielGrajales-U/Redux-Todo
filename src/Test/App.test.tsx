import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {beforeEach, describe, expect, test} from 'vitest'
import App from '../App'
import { Provider } from 'react-redux'
import { store } from '../Redux'

describe('<App />', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })

    test('should add, modify status and remove todo', async () => {
        const user = userEvent.setup()

        //Buscar el input
        const input = screen.getByPlaceholderText('Todo')
        expect(input).toBeDefined()

        //Buscar el textarea
        const textArea = screen.getByPlaceholderText('Description')
        expect(textArea).toBeDefined()

        //Buscar el form
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        //Buscar el add button
        const addButton = screen.getByText('Add Todo')
        expect(addButton).toBeDefined() 

        
        //Acciones de usuario
        await user.type(input, 'Terminar testing')
        await user.click(addButton)
        
        //Obtener las listas
        const list = screen.getAllByRole('list')
        expect(list).toBeDefined()
        
        //separar listas
        const completedList = list[0]
        const incompletedList = list[1]
        
        expect(completedList).toBeDefined()
        expect(incompletedList).toBeDefined()
        
        //Confirmar si se agrego el todo
        expect(incompletedList.childNodes.length).toBe(1)

        //Obtener elemento añadido
        const item = screen.getByText('Terminar testing')
        expect(item).toBeDefined()

        //Buscar el boton toggle
        const completedButton = screen.getByText('← Completed')
        expect(completedButton).toBeDefined()

        //Cambiar a completado el todo
        await user.click(completedButton)

        //Ver si se cambio el todo a completado
        expect(incompletedList.childNodes.length).toBe(0)
        expect(completedList.childNodes.length).toBe(1)

        const removeButton = screen.getByText('Delete 🗑️')
        expect(removeButton).toBeDefined()

        //Eliminar el todo
        await user.click(removeButton)

        //Verificar que se elimino el todo
        expect(completedList.childNodes.length).toBe(0)

        screen.debug()
    })
})