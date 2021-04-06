import axios from "axios";


// создаем instance axios и настраиваем один раз, чтобы не дублировать код при каждом запросе.
const instance = axios.create({
    // withCredentials - Свойство withCredentials это Boolean который определяет, должны ли
    // создаваться кросс-доменные Access-Control запросы с использованием таких идентификационных данных как cookie
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2e7cae24-6e87-458f-8c5f-7361562c8207'
    }
})

type CommonResponseType<T> = {
    resultCode: number
    message: string[]
    data: T
    fieldsErrors: []
}

type GetUsersType = {
    error: string | null
    items: userType[]
    totalCount: number
}

type AuthMeType = {
    id: number
    login: string
    email: string
}

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
    getProfile(userId: string) {
        return instance.get<profileUserType>(`profile/${userId}`)
            .then(response => response.data) },
    getStatus(userId: string) { return instance.get<any>(`profile/status/${userId}`)
        .then(response => response.data) },
    updateStatus(status: string) { return instance.put<any>(`profile/status/`, { status: status })
        .then(response => response.data) },
}

export const authMe = {
     login() { return instance.get<CommonResponseType<AuthMeType>>('auth/me')
        .then(response => response.data) }
}
