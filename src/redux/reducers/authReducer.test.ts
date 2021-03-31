import authReducer, {AuthStateType} from "./authReducer";
import {setAuthUserDataAC} from "../actionsCreator/authAC";

type authDataType = {
    id: number
    email: string
    login: string
}

let initial: AuthStateType
let authData: authDataType

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
    }

})


test('auth data should be correct',() => {
    let { email, id, login } = authData
    const endState = authReducer(initial,setAuthUserDataAC(email,id,login))

    expect(endState.isAuth).toBe(true)
    expect(endState.email).toBe('worlddesign1987@gmail.com')
    expect(endState.login).toBe('Naytin')
    expect(endState.id).toBe(122)
})




