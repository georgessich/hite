import React from "react";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import classes from "./shopQueryWrapper.module.scss";
export default function ShopQueryWrapper({ loading, error, data, children }) {
  if (error) {
    return (
      <div style={{ position: "absolute", left: "60%", top: "40%" }}>
        Error! {error.message}
      </div>
    );
  }
  if (loading) {
    return (
      <div className={classes["shop__wrapper"]}>
        <LoadingSpinner />
      </div>
    );
  }

  if (data.length > 0) {
    return children;
  } else {
    return(<div className={classes["shop__wrapper"]}>
      <p className={classes["shop__wrapper-text"]}>No items found....</p>
    </div>)
  }
}
