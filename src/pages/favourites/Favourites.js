import classes from "./Favourites.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favsActions } from "../../store/favs-slice";
import EmptyFavourites from "./EmptyFavourites";
import RecentPages from "../../components/recentPages/RecentPages";
import FavouriteCard from "./FavouriteCard";
const Favourites = () => {
 const favs = useSelector((state) => state.favs.items)
  const viewedPages = useSelector((state) => state.recent.items)
  console.log(favs)
 
  return (
    <section className={classes["favourites"]}>
      <h2 className={classes["favourites__title"]}>Favourites</h2>

      {favs.length === 0 ? 
        <EmptyFavourites />
       : (
        <ul className={classes["favourites__items"]}>
          {favs.map((fav) => (
           <FavouriteCard fav={fav}/>
          ))}
        </ul>
      )}
      <RecentPages />
    </section>
  );
};

export default Favourites;
