import classes from "./ItemGrid.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favsActions } from "../../../store/favs-slice";
const ItemGrid = (props) => {
  const { title, price, id, image } = props;
  const [buttonClicked, setButtonClicked] = useState(false);
  const favs = JSON.parse(localStorage.getItem("favs"));
  useEffect(() => {
    const favItem = favs.items.find((item) => item.id === id);
    if(favItem) {
      setButtonClicked(true)

    } else {
      setButtonClicked(false)
    }

  }, [favs, id])
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image
      })
    );
  };
  const addToFavourites = () => {
    dispatch(
      favsActions.addItemToFavs({
        id,
        title,
        price,
        image,
      }),
      setButtonClicked(true)
    );
    
  };
  const removeFromFavourites = (id) => {
    dispatch(
      favsActions.removeItemFromFavs(
       id
      ),
      setButtonClicked(false)
    )
  }
  return (
    <li>
      <NavLink
        to={`/shop/${id}`}
        key={id}
        className={classes["itemgrid__item"]}
      >
        <img
          className={classes["itemgrid__item-img"]}
          src={image}
          alt="itemcard"
        />
        <span className={classes["itemgrid__item-title"]}>{title}</span>
        <span className={classes["itemgrid__item-price"]}>${price}</span>
      </NavLink>
      <button onClick={addToCartHandler}>add to cart</button>
      {buttonClicked && (
        <button className={classes["like"]} onClick={() => removeFromFavourites(id)}>
          {" "}
          <svg viewBox="0 0 512 512" width="100" title="heart">
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
          </svg>
        </button>
      )}
       {!buttonClicked && (
        <button className={classes["itemgrid__btn"]} onClick={addToFavourites}>
          {" "}
          <svg viewBox="0 0 512 512" width="100" title="heart">
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
          </svg>
        </button>
      )}
    </li>
  );
};

export default ItemGrid;
