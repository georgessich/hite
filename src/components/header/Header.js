import classes from "./Header.module.scss";
import logo from '../../images/logo.png';
import heart from '../../images/heart.png';
import basket from '../../images/backet.png';
import search from '../../images/search.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  let navigate = useNavigate();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  function changeLocation(placeToGo){
    navigate(placeToGo, { replace: true });
    window.location.reload();
}
  return (
    <header className={classes.header}>
      <div className={classes['header__container']}>
        <nav className={classes["header_left__menu"]}>
          <ul className={classes["header_left__menu-items"]}>
            <li className={classes["header_left__menu-item"]}>
              <NavLink to="/" className={classes["header_left__menu-link"]}>
                main
              </NavLink>
            </li>
            <li className={classes["header_left__menu-item"]}>
              <NavLink to="/shop/" onClick={() => changeLocation('/shop/')} className={classes["header_left__menu-link"]}>
                shop
              </NavLink>
            </li>
            <li className={classes["header_left__menu-item"]}>
              <NavLink to="/about/" className={classes["header_left__menu-link"]}>
                about
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/" className={classes["header__link"]}><img src={logo} alt="logo" /></NavLink>
        <nav className={classes["header_right__menu"]}>
          <ul className={classes["header_right__menu-items"]}>
            <li className={classes["header_right__menu-item"]}>
              <a href="#" className={classes["header_right__menu-link"]}><img src={search} alt="search" /></a>
            </li>
            <li className={classes["header_right__menu-item"]}>
              <NavLink to="/favourites" className={classes["header_right__menu-link"]}><img src={heart} alt="heart" /></NavLink>
            </li>
            <li className={classes["header_right__menu-item"]}>
              <NavLink to="/cart" className={classes["header_right__menu-link"]}><img src={basket} alt="basket" />{cartQuantity > 0 && <span className={classes["header_right__menu-link-basket"]}>{cartQuantity}</span>}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
