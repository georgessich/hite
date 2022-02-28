import classes from "./ItemGrid.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { recentActions } from "../../../store/recent-slice";
import { useDispatch } from "react-redux";
const ItemGrid = (props) => {
  const { title, price, id, image } = props;
  const dispatch = useDispatch();
  const addToViewed = () => {
    dispatch(
      recentActions.recentlyViewedPages({
        id,
        title,
        price, 
        image
      })
    )
  }
 

  return (
    <li>
      <NavLink
        to={`/shop/${id}`}
        key={id}
        className={classes["itemgrid__item"]}
        onClick={addToViewed}
      >
        <img
          className={classes["itemgrid__item-img"]}
          src={image}
          alt="itemcard"
        />
        <span className={classes["itemgrid__item-title"]}>{title}</span>
        <span className={classes["itemgrid__item-price"]}>${price}</span>
      </NavLink>

     
    </li>
  );
};

export default ItemGrid;
