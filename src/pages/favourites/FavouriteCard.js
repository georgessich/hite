import { NavLink } from "react-router-dom";
import classes from "./Favourites.module.scss";
import { useDispatch } from "react-redux";
import { favsActions } from "../../store/favs-slice";
const FavouriteCard = (props) => {
    const { id, name, price, image }  = props.fav;
  const dispatch = useDispatch();
  const removeFromFavourites = (id) => {
    dispatch(favsActions.removeItemFromFavs(id));
  };

  return (
    <div>
      <NavLink
        className={classes["favourites__item"]}
        to={`/shop/${id}`}
        key={id}
      >
        <img src={image} alt={name} />
        <span className={classes["favourites__item-name"]}>{name}</span>
        <span className={classes["favourites__item-price"]}>${price}</span>
      </NavLink>
      <button className={classes["favourites__item-btn"]} onClick={() => removeFromFavourites(id)}>
        Remove from Favourites
      </button>
    </div>
  );
};

export default FavouriteCard;
