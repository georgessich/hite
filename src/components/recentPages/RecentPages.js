import classes from "./RecentPages.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import RecentPagesCard from "./RecentPagesCard";
const RecentPages = () => {
  const listPages = useSelector((state) => state.recent.items);

  return (
    <div className={classes["recently"]}>
      <span className={classes["recently__title"]}>Recently Viewed</span>
      <ul className={classes["recently__items"]}>
        {listPages.map((item) => (
            <RecentPagesCard item={item} />
          
        ))}
      </ul>
      <NavLink className={classes["recently__btn"]} to="/shop">view all</NavLink>
    </div>
  );
};

export default RecentPages;
