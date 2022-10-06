import classes from "./Favourites.module.scss";

import { useSelector } from "react-redux";

import EmptyFavourites from "./EmptyFavourites";
import RecentPages from "../../components/recentPages/RecentPages";
import FavouriteCard from "./FavouriteCard";
const Favourites = () => {
  const favs = useSelector((state) => state.favs.items);
  return (
    <section className={classes["favourites"]}>
      <h2 className={classes["favourites__title"]}>Favourites</h2>

      {favs.length === 0 ? (
        <EmptyFavourites />
      ) : (
        <ul className={classes["favourites__items"]}>
          {favs.map((fav) => (
            <FavouriteCard fav={fav} />
          ))}
        </ul>
      )}
      <RecentPages />
    </section>
  );
};

export default Favourites;
