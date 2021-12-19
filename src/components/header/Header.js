import classes from "./Header.module.scss";
import logo from '../../images/logo.png';
import heart from '../../images/heart.png';
import basket from '../../images/backet.png';
import search from '../../images/search.png';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header__container']}>
        <nav className={classes["header_left__menu"]}>
          <ul className={classes["header_left__menu-items"]}>
            <li className={classes["header_left__menu-item"]}>
              <a href="#" className={classes["header_left__menu-link"]}>
                main
              </a>
            </li>
            <li className={classes["header_left__menu-item"]}>
              <a href="#" className={classes["header_left__menu-link"]}>
                shop
              </a>
            </li>
            <li className={classes["header_left__menu-item"]}>
              <a href="#" className={classes["header_left__menu-link"]}>
                about
              </a>
            </li>
          </ul>
        </nav>
        <a href="" className={classes["header__link"]}><img src={logo} alt="logo" /></a>
        <nav className={classes["header_right__menu"]}>
          <ul className={classes["header_right__menu-items"]}>
            <li className={classes["header_right__menu-item"]}>
              <a href="#" className={classes["header_right__menu-link"]}><img src={search} alt="search" /></a>
            </li>
            <li className={classes["header_right__menu-item"]}>
              <a href="#" className={classes["header_right__menu-link"]}><img src={heart} alt="heart" /></a>
            </li>
            <li className={classes["header_right__menu-item"]}>
              <a href="#" className={classes["header_right__menu-link"]}><img src={basket} alt="basket" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
