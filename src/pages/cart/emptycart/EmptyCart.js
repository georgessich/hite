import classes from "./EmptyCart.module.scss";
import { NavLink } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className={classes["emptycart"]}>
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes["emptycart__img"]}
      >
        <path
          d="M1 1V1C2.62955 1 4.02681 2.16338 4.32202 3.76596L5.39665 9.59965C5.74623 11.4974 7.40081 12.875 9.33046 12.875H17.6039C19.421 12.875 21.0098 11.6502 21.4722 9.89297L22.1795 7.20547C22.8469 4.66913 20.9339 2.1875 18.3112 2.1875H9.125"
          stroke="#212F36"
          stroke-width="2"
          stroke-linecap="round"
        />
        <ellipse cx="8.5" cy="18.3438" rx="2.5" ry="2.65625" fill="#212F36" />
        <ellipse
          cx="17.875"
          cy="18.3438"
          rx="2.5"
          ry="2.65625"
          fill="#212F36"
        />
      </svg>
      <span className={classes["emptycart__title"]}>Your cart is empty</span>
      <NavLink className={classes["emptycart__link"]} to="/shop">
        Continue shopping
      </NavLink>
    </div>
  );
};

export default EmptyCart;
