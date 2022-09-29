import classes from "./Carousel.module.scss";
import React, { useState } from "react";
export const CarouselItem = ({ children, width }) => {
  return (
    <div className={classes["carousel-item"]} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className={classes["carousel"]}>
      <div
        className={classes["inner"]}
        style={{ transform: `translateX(-${activeIndex * 100}%)`, opacity: `${activeIndex + 1}`}}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={classes["indicators"]}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={classes[`${index === activeIndex ? "active" : ""}`]}
              onClick={() => {
                updateIndex(index);
              }}
            >

            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
