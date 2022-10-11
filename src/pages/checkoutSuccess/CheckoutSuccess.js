import React from 'react'
import classes from './CheckoutSuccess.module.scss'
import {ReactComponent as Check} from './check.svg'
import { NavLink } from 'react-router-dom'
export default function CheckoutSuccess() {
  return (
    <div className={classes['success']}>
        <Check className={classes['success-check']}/>
        <span className={classes['success-text']}>Thank you for your purchase!</span>
        <NavLink className={classes['success-link']} to={"/shop/"}>Continue shopping</NavLink>
    </div>
  )
}
