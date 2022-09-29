import classes from "./Accordeon.module.scss";
import { useState } from "react";
const Accordeon = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes["accordeon"]}>
      <div className={!isActive ? classes["accordeon__btn"] : classes["accordeon__btn--active"]} onClick={() => setIsActive(!isActive)}>
        <div className={classes["accordeon__btn-title"]}>{title}</div>
      </div>
      {/* {!isActive && <div className={classes['accordeon__content']}>{text}</div>} */}
      <div className={!isActive ? classes["accordeon__content"] : classes["accordeon__content--active"]}>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Accordeon;
