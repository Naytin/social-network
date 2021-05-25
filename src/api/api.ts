import axios from "axios";


// создаем instance axios и настраиваем один раз, чтобы не дублировать код при каждом запросе.
const instance = axios.create({
    // withCredentials - Свойство withCredentials это Boolean который определяет, должны ли
    // создаваться кросс-доменные Access-Control запросы с использованием таких идентификационных данных как cookie
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a409a2ec-60ad-4ff6-9051-8f6025edc2fd',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) },
    userFollow(userId: number) {
        return instance.post<CommonResponseType<boolean>>(`follow/${userId}`)
            .then(response => response.data) },
    userUnfollow(userId: number) {
        return instance.delete<CommonResponseType<boolean>>(`follow/${userId}`)
            .then(response => response.data) }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<profileUserType>(`profile/${userId}`)
            .then(response => response.data) },
    getStatus(userId: number) {
        return instance.get<any>(`profile/status/${userId}`)
        .then(response => response.data) },
    updateStatus(status: string) {
        return instance.put<any>(`profile/status`, { status: status })
        .then(response => response.data) },
}

export const authMe = {
    auth() { return instance.get<CommonResponseType<AuthMeType>>('auth/me')
        .then(response => response.data) },
    login(formData: FormDataType) { return instance.post<CommonResponseType<AuthMeType>>('auth/login', {...formData})
        .then(response => response.data) },
    logout() { return instance.delete<CommonResponseType<{}>>('auth/login')
        .then(response => response.data) }
}

// types
type CommonResponseType<T> = {
    resultCode: number
    messages: string[]
    data: T
    fieldsErrors: []
}

type GetUsersType = {
    error: string | null
    items: userType[]
    totalCount: number
}

export type AuthMeType = {
    id: number
    login: string
    email: string
}

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
