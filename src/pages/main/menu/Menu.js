import classes from "./Menu.module.scss";
import sofas from "../../../images/main-sofas.png";
import chairs from "../../../images/main-chairs.png";
import lights from "../../../images/main-lights.png";
const Menu = () => {
  return (
    <div className={classes["menu"]}>
      <ul className={classes["menu__items"]}>
        <li className={classes["menu__item"]}>
          <a href="#" className={classes["menu__link"]}>
            <img src={sofas} alt="Sofas" className={classes["menu__link-img"]} />
            <span className={classes["menu__link-txt"]}>Sofas</span>
          </a>
        </li>
        <li className={classes["menu__item"]}>
          <a href="#" className={classes["menu__link"]}>
            <img src={chairs} alt="Chairs" className={classes["menu__link-img"]} />
            <span className={classes["menu__link-txt"]}>Chairs</span>
          </a>
        </li>
        <li className={classes["menu__item"]}>
          <a href="#" className={classes["menu__link"]}>
            <img src={lights} alt="Lights" className={classes["menu__link-img"]} />
            <span className={classes["menu__link-txt"]}>Lights</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
