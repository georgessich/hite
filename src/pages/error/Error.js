import classes from "./Error.module.scss";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
   <div className={classes["error"]}>
       <h2 className={classes["error__heading"]}>404</h2>
       <p className={classes["error__subheading"]}>
       Looks like the page you were looking for is no longer here.
       </p>
       <NavLink className={classes['error__link']} to="/shop">Start Shopping</NavLink>
   </div>
    
  );
};

export default Error;
