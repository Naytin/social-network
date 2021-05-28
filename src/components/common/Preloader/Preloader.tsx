import React from 'react'
import preloader from "../../../assets/Spinner-1s-200px.gif";
import s from './Preloader.module.scss'


const Preloader = () => {
    return  <div className={s.loading}>
        <img  src={preloader} alt='preloader'/>
    </div>
}

export default Preloader