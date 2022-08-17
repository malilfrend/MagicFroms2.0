import React from 'react'
import { NavLink } from "react-router-dom";
import c from './Header.module.css'

export const Header = () => {
  return (
    <div className={c.header}>
        <div className={c.header__content}>
            <div className={c.header__item}>
                <NavLink className={c.form} to={'/form'}>Form</NavLink>
                <NavLink className={c.history} to={'/history'}>History</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header