import classes from "./ItemCard.module.scss";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favsActions } from "../../../store/favs-slice";
import Carousel, { CarouselItem } from "../../../components/carousel/Carousel";
import RecentPages from "../../../components/recentPages/RecentPages";
const GET_ITEM = gql`
  query ($slug: String!) {
    itemCard(slug: $slug) {
      id
      image
      title
      price
      materials
      rating
      description
      pageImages
    }
  }
`;
const ItemCard = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState(false);
  const { data, loading, error } = useQuery(GET_ITEM, {
    variables: {
      slug,
    },
  });

  if (loading) return <div>loading...</div>;

  if (error) return <div>error...</div>;

  const { id, title, price, image, rating, description, pageImages } =
    data.itemCard;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };
  const addToFavourites = () => {
    dispatch(
      favsActions.addItemToFavs({
        id,
        title,
        price,
        image,
      }),
      setButtonClicked(true)
    );
  };
  const removeFromFavourites = (id) => {
    dispatch(favsActions.removeItemFromFavs(id), setButtonClicked(false));
  };
  return (
    <div>
      <div className={classes["itemcard"]}>
        <div className={classes["itemcard__right"]}>
          {!buttonClicked && (
            <button
              onClick={addToFavourites}
              style={{
                gridRow: "5/6",
                gridColumn: "3/5",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {" "}
              <svg
                viewBox="0 0 512 512"
                title="heart"
                fill="white"
                stroke="black"
                strokeWidth="32px"
                width="30x"
                height="30px"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
            </button>
          )}

          {buttonClicked && (
            <button
              className={classes["itemgrid__right-btn"]}
              onClick={() => removeFromFavourites(id)}
              style={{
                gridRow: "5/6",
                gridColumn: "3/5",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {" "}
              <svg
                viewBox="0 0 512 512"
                title="heart"
                fill="red"
                stroke="red"
                strokeWidth="32px"
                width="30x"
                height="30px"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
            </button>
          )}

          <span className={classes["itemcard__right-title"]}>{title}</span>
          <span className={classes["itemcard__right-price"]}>${price}</span>
          <div style={{ gridRow: "3/4", gridColumn: "1/3" }}>
            <Rating
              ratingValue={rating * 20}
              fillColor="#B8D4E3"
              emptyColor="transparent"
              size={24}
              allowHover={false}
              readonly={true}
              className={classes["itemcard__right-rating"]}
              //
            />
          </div>
          <button
            className={classes["itemcard__right-add"]}
            onClick={addToCartHandler}
          >
            add to cart
          </button>
          <div className={classes["itemcard__right-description"]}>
          {description.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        </div>

        <Carousel className={classes["itemcard__left"]}>
          <CarouselItem>
            <img width="400px" height="650px" src={pageImages[0]} />
          </CarouselItem>
          <CarouselItem>
            <img width="400px" height="650px" src={pageImages[1]} />
          </CarouselItem>
        </Carousel>
        
      </div>
      <RecentPages />()
    </div>
  );
};

export default ItemCard;
