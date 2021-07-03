import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import s from "./Users.module.scss";
import MessageInform from "../common/MessageInform/MessageInform";
import Button from "../common/Button/Button";
import {setCurrentPage, setFilter, usersRequest} from "../../redux/actionsCreator/usersAC";
type PropsType = {
    pagesCount: number
}
const Pagination = React.memo(({pagesCount}:PropsType) => {
    console.log(pagesCount)
    const [pages, setPages] = useState<number[]>([])
    // const [pagesCount, setPagesCount] = useState(0)
    const [currentValue, setCurrentValue] = useState('')
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()
    const dispatch = useDispatch()
    const state = useSelector<AppStateType, usersType>(state => state.usersPage)
    // usersRequest(state.currentPage, state.pageSize)
    // setPagesCount(Math.ceil(state.totalUsersCount / state.pageSize))


    useEffect(() => {
        if(pagesCount) {
            let temp = []
            for (let i = 1; i <= pagesCount; i++) {
                temp.push(i)
            }
            if(temp.length) {
                setPages(temp)
            }
        }
    },[])

    const handleChangePage = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(usersRequest(pageNumber, state.pageSize))
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.currentTarget.value)
        if(timeoutId)
        clearTimeout(timeoutId)

        let id = setTimeout(() => {
            setFilter(currentValue)
        }, 500)
        setTimeoutId(id)

    }

    return (<div className={s.pagination}>
            <div className={s.input__wrapper}>
                <input placeholder={'Search here'} className={s.input__item} type="search" value={currentValue} onChange={handleSearch}/>
                {!state.users.length && <MessageInform>user not found</MessageInform>}
            </div>
            <div className={s.pagination_wrap__btn}>
                {pages.map(p => <Button onClick={() => handleChangePage(p)}
                                                   className={state.currentPage === p ? s.selected : ''} key={p}>{p}</Button>)}
            </div>
        </div>
    );
});

export default Pagination;

