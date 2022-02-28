import classes from "./RecentPages.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const RecentPages = () => {
  const listPages = useSelector((state) => state.recent.items);
  return (
    <div className={classes["recently"]}>
      <span className={classes["recently__title"]}>Recently Viewed</span>
      <ul className={classes["recently__items"]}>
        {listPages.map((item) => (
            <NavLink to={`/shop/${item.id}`} className={classes["recently__item"]}>
                <img  className={classes["recently__item-img"]} src={item.image} alt={item.title} />
                <span  className={classes["recently__item-title"]}>{item.name}</span>
                <span  className={classes["recently__item-price"]}>${item.price}</span>
            </NavLink>
          
        ))}
      </ul>
      <NavLink className={classes["recently__btn"]} to="/shop">view all</NavLink>
    </div>
  );
};

export default RecentPages;
