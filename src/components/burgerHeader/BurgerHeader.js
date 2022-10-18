import classes from "./BurgerHeader.module.scss";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "../../images/logo.png";
import heart from "../../images/heart.png";
import basket from "../../images/backet.png";
import search from "../../images/search.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
export default function BurgerHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
    if(!isOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  const clearInputField = () => {
    setSearchQuery("");
  };
  const dispatch = useDispatch();
  const inputSearchQuery = () => {
    dispatch(searchActions.searchQueryHandler(searchQuery));

    clearInputField();
    closeSideBar();
  };
  let styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "36px",
      height: "30px",
      right: "20px",
      bottom: "20px",
    },
    bmBurgerBars: {
      background: "#B8D4E3",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#bdc3c7",
      margin: "0",
      height: "100%",
      fontSize: "1.15em",
      overflow: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
  };

  let navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    navigate(0);
  }
  const handleEnterKey = (e) => {
    if (e.keyCode === 13 && searchQuery !== "") {
      inputSearchQuery();
      navigate(`/search/${searchQuery}`);
    }
  };
  return (
    <div id="outer-container" className={classes['header__cont']}>
      <header className={classes.header}>
        <NavLink to="/" className={classes["header__link"]}>
          <img src={logo} alt="logo" className={classes["header__link-logo"]}/>
        </NavLink>
        <Menu
         isOpen={isOpen}
         onOpen={handleIsOpen}
         onClose={handleIsOpen}
          
          styles={styles}
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <div id="page-wrap" className={classes["header__container"]}>
            <nav className={classes["header_left__menu"]}>
              <ul className={classes["header_left__menu-items"]}>
                <li className={classes["header_left__menu-item"]}>
                  <NavLink
                    onClick={closeSideBar}
                    to="/"
                    className={classes["header_left__menu-link"]}
                  >
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
                    onClick={closeSideBar}
                    to="/about/"
                    className={classes["header_left__menu-link"]}
                  >
                    about
                  </NavLink>
                </li>
              </ul>
            </nav>

            <nav className={classes["header_right__menu"]}>
              <ul className={classes["header_right__menu-items"]}>
                <li className={classes["header_right__menu-item"]}>
                  <NavLink
                    to="/favourites"
                    onClick={closeSideBar}
                    className={classes["header_right__menu-link"]}
                  >
                    <img
                      className={classes["header_right__menu-link--icon"]}
                      src={heart}
                      alt="heart"
                    />
                    favourites
                  </NavLink>
                </li>
                <li className={classes["header_right__menu-item"]}>
                  <NavLink
                    to="/cart"
                    onClick={closeSideBar}
                    className={classes["header_right__menu-link"]}
                  >
                    <img
                      className={classes["header_right__menu-link--icon"]}
                      src={basket}
                      alt="basket"
                      onClick={closeSideBar}
                    />
                    {cartQuantity > 0 && (
                      <span
                        className={classes["header_right__menu-link-basket"]}
                      >
                        {cartQuantity}
                      </span>
                    )}
                    basket
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
                    className={classes["header_right__menu-link"]}
                  >
                    <img src={search} alt="search" />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </Menu>
      </header>
    </div>
  );
}
