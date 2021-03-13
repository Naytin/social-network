import React from 'react'
import s from './Users.module.scss'

// нам нужна классовая компонента, когда мы хотим взаимодействовать с обьектом. и для избежания side Effect-а. в данной ситуации, для запроса на сервер
// функциональная компонента - это читсая функция, которая принимает пропсы и возвращает jsx, при этом она не может никак менять состояние стейта
// или делать запрос на сервер,
// а лиш через dispatcher отсылать action для изменения состояния.

const defaultAvatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'

type propsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (value: number) => void
    follow: (uId: number) => void
    unfollow: (uId: number) => void
}

const Users = (props: propsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            <div className={s.pagination}>
                {pages.map(p => <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.selected : ''} key={p}>{p}</span>)}
            </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ?
                            u.photos.small : defaultAvatar} alt={u.photos.small ? u.photos.small : defaultAvatar}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users