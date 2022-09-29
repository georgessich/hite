import React from 'react'
import classes from './LoadingSpinner.module.scss'
export default function LoadingSpinner() {
  return (
    <div className={classes['spinner__container']}>
        <div className={classes['spinner']}></div>
    </div>
  )
}
