import classes from "./Favourites.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favsActions } from "../../store/favs-slice";
import EmptyFavourites from "./EmptyFavourites";
const Favourites = () => {
  const favs = JSON.parse(localStorage.getItem("favs"));
  const [items, setItems] = useState(favs);
  const dispatch = useDispatch();
  const removeFromFavourites = (id) => {
    dispatch(favsActions.removeItemFromFavs(id));
    const newItems = JSON.parse(localStorage.getItem("favs"));
    setItems(newItems);
  };
  return (
    <section className={classes["favourites"]}>
      <h2 className={classes["favourites__title"]}>Favourites</h2>

      {items.items.length === 0 ? 
        <EmptyFavourites />
       : (
        <ul className={classes["favourites__items"]}>
          {items.items.map((fav) => (
            <li className={classes["favourites__item"]}>
              <NavLink
                className={classes["favourites__item"]}
                to={`/shop/${fav.id}`}
                key={fav.id}
              >
                <img src={fav.image} alt={fav.name} />
                <span>{fav.name}</span>
                <span>${fav.price}</span>
              </NavLink>
              <button onClick={() => removeFromFavourites(fav.id)}>
                Remove from Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Favourites;
