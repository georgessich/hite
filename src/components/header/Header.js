import classes from "./Header.module.scss";
import logo from "../../images/logo.png";
import heart from "../../images/heart.png";
import basket from "../../images/backet.png";
import search from "../../images/search.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  
  const clearInputField = () => {
    setSearchQuery("")
  };
  const dispatch = useDispatch()
  const inputSearchQuery = () => {
    dispatch(searchActions.searchQueryHandler(searchQuery))
    
    clearInputField()
  }
 
  
  let navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  const handleEnterKey = (e) => {
    
    if (e.keyCode === 13 && searchQuery !== "") {
      inputSearchQuery();
      navigate(`/search/${searchQuery}`)
    }
  }
  return (
    <header className={classes.header}>
      <div className={classes["header__container"]}>
        <nav className={classes["header_left__menu"]}>
          <ul className={classes["header_left__menu-items"]}>
            <li className={classes["header_left__menu-item"]}>
              <NavLink to="/" className={classes["header_left__menu-link"]}>
                main
              </NavLink>
            </li>
            <li className={classes["header_left__menu-item"]}>
              <NavLink
                to="/shop/"
                onClick={() => changeLocation("/shop/")}
                className={classes["header_left__menu-link"]}
              >
                shop
              </NavLink>
            </li>
            <li className={classes["header_left__menu-item"]}>
              <NavLink
                to="/about/"
                className={classes["header_left__menu-link"]}
              >
                about
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/" className={classes["header__link"]}>
          <img src={logo} alt="logo" />
        </NavLink>
        <nav className={classes["header_right__menu"]}>
          <ul className={classes["header_right__menu-items"]}>
            
            <li className={classes["header_right__menu-item"]}>
              <NavLink
                to="/favourites"
                className={classes["header_right__menu-link"]}
              >
                <img src={heart} alt="heart" />
              </NavLink>
            </li>
            <li className={classes["header_right__menu-item"]}>
              <NavLink
                to="/cart"
                className={classes["header_right__menu-link"]}
              >
                <img src={basket} alt="basket" />
                {cartQuantity > 0 && (
                  <span className={classes["header_right__menu-link-basket"]}>
                    {cartQuantity}
                  </span>
                )}
              </NavLink>
            </li>
            <li className={classes["header_right__menu-item"]}>
              <label
                htmlFor="search-form"
                className={classes["header_right__menu-search"]}
              >
                <input
                  type="search"
                  className={classes["header_right__menu-search--input"]}
                  name="search-form"
                  id="search-form"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleEnterKey}
                />
                 </label>
                <NavLink
                
                  to={`/search/${searchQuery}`}
                  onClick={inputSearchQuery}
                  className={
                    classes[
                      "header_right__menu-link"
                    ]
                  }
                >
                  <img src={search} alt="search" />
                </NavLink>
             
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
