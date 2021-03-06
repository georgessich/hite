import classes from "./PopularItems.module.scss";
import { gql, useQuery } from "@apollo/client";
import banner from "../../../images/banner.png";
import { NavLink } from "react-router-dom";
const GET_POPULAR_ITEMS = gql`
  query {
    category(slug: "chairs") {
      itemCards {
        id
        title
        price
        image
      }
    }
  }
`;
const PopularItems = () => {
  const { loading, error, data } = useQuery(GET_POPULAR_ITEMS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div className={classes["popitems"]}>
      <span className={classes["popitems-title"]}>Popular Right Now</span>
      <div className={classes["popitems-items"]}>
        {data.category.itemCards.slice(0, 3).map((chair) => (
          <NavLink to={`/shop/${chair.id}`} className={classes["popitems-item"]}>
            <div className={classes["popitems-item__img"]}>
              <img src={chair.image} alt="chair" />
            </div>
            <div className={classes["popitems-item__title"]}>{chair.title}</div>
            <div className={classes["popitems-item__price"]}>${chair.price}</div>
          </NavLink>
        ))}
        <div className={classes["popitems__banner"]}>
          <img src={banner} alt="banner" className={classes["popitems__banner-img"]} />
          <span className={classes["popitems__banner-txt"]}>Bar Stools Sale</span>
          <button className={classes["popitems__banner-btn"]}>see deals</button>
        </div>
       
      </div>
      <NavLink to="/shop" className={classes["popitems-btn"]}>view all</NavLink>
    </div>
  );
};

export default PopularItems;
