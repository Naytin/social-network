import dialogsReducer from './dialogsReducer'
import {addMessage} from "../actionsCreator/dialogsAC";
let initial: dialogsPageType

beforeEach(() => {
    initial = {
        dialogs: [
            {
                id: '1',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU',
                name: 'Sveta',
                status: {
                    title: 'Online',
                    isOnline: true
                },
                messages: null
            },
        ],
        messages: [
            { id: 1, message: 'Hello, how are you?', name: 'Sveta' },
            { id: 2, message: 'I,m a good student', name: 'my' },
            { id: 3, message: 'you, how are you', name: 'Alina' },
        ],
    }
})


test('new message text must by correct',() => {
    const endState = dialogsReducer(initial,addMessage('22'))

    expect(endState.messages[3].message).toBe('22')
})

test('messages must by added',() => {
    const endState2 = dialogsReducer(initial,addMessage("323232"))

    expect(endState2.messages[2]).toEqual({ id: 3, message: 'you, how are you', name: 'Alina' })
    expect(endState2.messages.length).toBe(4)
    expect(endState2.messages[3].id).toEqual(11)
    expect(endState2.messages[3].name).toBe("Naytin")
    expect(endState2.messages[3].message).toBe('323232')
})



