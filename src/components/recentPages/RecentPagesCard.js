import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './RecentPagesCard.module.scss'


export default function RecentPagesCard(props) {
    const {id, name, price, image} = props.item
    
  return (
    <div>
         <NavLink key={id} to={`/shop/product/${id}`} className={classes["recently__item"]}>
                <img  className={classes["recently__item-img"]} src={image} alt={name} />
                <span  className={classes["recently__item-title"]}>{name}</span>
                <span  className={classes["recently__item-price"]}>${price}</span>
            </NavLink>
    </div>
  )
}
