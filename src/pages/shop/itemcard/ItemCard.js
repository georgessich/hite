import classes from "./ItemCard.module.scss";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favsActions } from "../../../store/favs-slice";

import RecentPages from "../../../components/recentPages/RecentPages";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { ReactComponent as Heart } from "./heart.svg";
import { useGetItemQuery } from "../../../store/fetch-slice";
import ReactImageMagnify from "react-image-magnify";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GlassMagnifier } from "react-image-magnifiers";
import "swiper/swiper-bundle.css";
const ItemCard = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.items);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const { data = [], isLoading, isError } = useGetItemQuery(slug);
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>error...</div>;
  const { id, title, price, image, rating, description, pageImages } = data;
  const favIds = favs.map((fav) => fav.id);
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      }),
      setAddItem(true)
    );
  };
  const addToFavourites = () => {
    if (!buttonClicked) {
      dispatch(
        favsActions.addItemToFavs({
          id,
          title,
          price,
          image,
        }),
        setButtonClicked(true)
      );
    } else if (buttonClicked) {
      dispatch(favsActions.removeItemFromFavs(id), setButtonClicked(false));
    }
  };
  return (
    <div style={{marginTop:"50px"}}>
      <div style={{ display: "flex", width:"50%", marginLeft:"25%", marginBottom:"50px" }}>
        <div style={{ width: "400px" }}>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            rewind={true}
            wrapperTag="ul"
            onSlideChange={() => console.log("slide change")}
          >
            {pageImages.map((image, i) => (
              <SwiperSlide key={i} tag="li">
                <div style={{ width: "400px" }}>
                  <GlassMagnifier imageSrc={image} />
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={classes["itemcard__right"]}>
          <button
            onClick={addToFavourites}
            className={classes["itemcard__right-btn"]}
          >
            {!buttonClicked && !favIds.includes(id) ? (
              <Heart className={classes["itemcard__right-btn--heart"]} />
            ) : (
              <Heart fill="#f5d523" stroke="#f5d523" />
            )}
          </button>

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
          {!addItem && (
            <button
              className={classes["itemcard__right-add"]}
              onClick={addToCartHandler}
            >
              add to cart
            </button>
          )}
          {addItem && (
            <button
              className={classes["itemcard__right-add--active"]}
              onClick={addToCartHandler}
            >
              added to cart!
            </button>
          )}

          <div className={classes["itemcard__right-description"]}>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <RecentPages />
    </div>
  );
};

export default ItemCard;
