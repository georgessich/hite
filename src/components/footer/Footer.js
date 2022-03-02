import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/union.png";
import classes from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__social"]}>
        <img src={logo} alt="Logo" className={classes["footer__social-logo"]} />
        <nav className={classes["footer__social-menu"]}>
          <ul className={classes["footer__social-items"]}>
            <li className={classes["footer__social-item"]}>
              <a href="#" className={classes["footer__social-link"]}>
                <img
                  src={instagram}
                  alt="instagram"
                  className={classes["footer__social-link--img"]}
                />
              </a>
            </li>
            <li className={classes["footer__social-item"]}>
              <a href="#" className={classes["footer__social-link"]}>
                <img
                  src={youtube}
                  alt="youtube"
                  className={classes["footer__social-link--img"]}
                />
              </a>
            </li>
            <li className={classes["footer__social-item"]}>
              <a href="#" className={classes["footer__social-link"]}>
                <img
                  src={twitter}
                  alt="twitter"
                  className={classes["footer__social-link--img"]}
                />
              </a>
            </li>
            <li className={classes["footer__social-item"]}>
              <a href="#" className={classes["footer__social-link"]}>
                <img
                  src={facebook}
                  alt="facebook"
                  className={classes["footer__social-link--img"]}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes["footer__left"]}>
        <nav className={classes["footer__left-menu"]}>
          <ul className={classes["footer__left-items"]}>
            <li className={classes["footer__left-item"]}>
              <NavLink to="/shop" className={classes["footer__left-link"]}>
                shop
              </NavLink>
            </li>
            <li className={classes["footer__left-item"]}>
              <NavLink to="/about" className={classes["footer__left-link"]}>
                about
              </NavLink>
            </li>
            <li className={classes["footer__left-item"]}>
              <NavLink to="/main" className={classes["footer__left-link"]}>
                main
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes["footer__right"]}>
        <nav className={classes["footer__right-menu"]}>
          <ul className={classes["footer__right-items"]}>
            <li className={classes["footer__right-item"]}>
              <NavLink to="/payment" className={classes["footer__right-link"]}>
                payment
              </NavLink>
            </li>
            <li className={classes["footer__right-item"]}>
              <a href="#" className={classes["footer__right-link"]}>
                delivery and returns
              </a>
            </li>
            <li className={classes["footer__right-item"]}>
              <NavLink to="/privacy" className={classes["footer__right-link"]}>
                privacy policy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes["footer__subscribe"]}>
        <form className={classes["footer__subscribe-form"]} action="">
          <span className={classes["footer__subscribe-form-title"]}>
            subscribe to hite newsletter
          </span>
          <input
            className={classes["footer__subscribe-form-input"]}
            type="email"
            id="email"
          ></input>
          <label
            className={classes["footer__subscribe-form-label"]}
            htmlFor="email"
          >
            e-mail
          </label>
          <button className={classes["footer__subscribe-form-btn"]}>
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
