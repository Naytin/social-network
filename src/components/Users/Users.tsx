import React, {ChangeEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Users.module.scss'
import Button from "../common/Button/Button";
import MessageInform from "../common/MessageInform/MessageInform";

// нам нужна классовая компонента, когда мы хотим взаимодействовать с обьектом. и для избежания side Effect-а. в данной ситуации, для запроса на сервер
// функциональная компонента - это читсая функция, которая принимает пропсы и возвращает jsx, при этом она не может никак менять состояние стейта
// или делать запрос на сервер,
// а лиш через dispatcher отсылать action для изменения состояния.

const defaultAvatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'

const Users = React.memo((props: propsType) => {
    const [value, setValue] = useState<string>()
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let timeoutId: NodeJS.Timeout
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value
        setValue(currentValue)
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            props.setFilter(currentValue)
        }, 500)
    }
    return <div>
        <div className={s.pagination}>
            <div className={s.search__wrapper}>
                <input placeholder={'Search here'} className={s.search__item} type="search" value={value} onChange={onSearchChange}/>
                {!props.users.length && <MessageInform>user not found</MessageInform>}
            </div>
            <div className={s.pagination_wrap__btn}>
                {pages.map(p => <Button onClick={() => props.onPageChanged(p)}
                                        className={props.currentPage === p ? s.selected : ''} key={p}>{p}</Button>)}
            </div>
        </div>
        <div className={s.wrapper}>
            {
                props.users.map(u =>
                    <div className={s.card__item} key={u.id}>

                        <div>
                            <img src={u.photos.small ?
                                u.photos.small : defaultAvatar}
                                 alt={u.photos.small ? u.photos.small : defaultAvatar}/>
                        </div>
                        <NavLink to={`/profile/${u.id}`}>
                            <span className={s.view__profile}>view profile</span>
                        </NavLink>
                        <span className={s.name}>{u.name}</span>
                        {u.followed ?
                            <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>DELETE FRIEND</Button> :
                            <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>ADD FRIEND</Button>
                        }
                    </div>)
            }
        </div>

    </div>
})
export default Users

//types
type propsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (value: number) => void
    follow: (uId: number) => void
    unfollow: (uId: number) => void
    followingInProgress: Array<number>
    setFilter: (value: string) => void
    filter: string
}
