import authReducer from "./authReducer";
import {AuthStateType, setAuthUserDataAC} from "../actionsCreator/authAC";

type authDataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initial: AuthStateType
let authData: AuthStateType

beforeEach(() => {
    initial = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    };
    authData = {
        id: 122,
        email: 'worlddesign1987@gmail.com',
        login: 'Naytin',
        isAuth: true
    }

})


test('auth data should be correct',() => {
    let { email, id, login, isAuth} = authData
    const endState = authReducer(initial,setAuthUserDataAC({email, id, login, isAuth}))

    expect(endState.isAuth).toBe(true)
    expect(endState.email).toBe('worlddesign1987@gmail.com')
    expect(endState.login).toBe('Naytin')
    expect(endState.id).toBe(122)
})




