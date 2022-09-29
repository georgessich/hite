import classes from "./ItemCard.module.scss";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favsActions } from "../../../store/favs-slice";
import Carousel, { CarouselItem } from "../../../components/carousel/Carousel";
import RecentPages from "../../../components/recentPages/RecentPages";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
const ItemCard = () => {
  const { slug } = useParams();
  console.log(slug)
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.items);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ addItem, setAddItem ] = useState(false);
  const [ item, setItem ] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect (() => {
    const fetchItems = async () => {
      const response = await fetch (`https://hite-ae54f-default-rtdb.europe-west1.firebasedatabase.app/items/i${slug}.json`)
      if(!response.ok) {
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();
  
      const loadedItems = responseData;
  
     
      setItem(loadedItems);
      setIsLoading(false);
    }
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message)
    })
  }, [])

  if (isLoading) return <LoadingSpinner />;

  if (httpError) return <div>error...</div>;

  const { id, title, price, image, rating, description, pageImages } =
    item;
  
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
                gridRow: "3/4",
                gridColumn: "2/4",
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
                width="40px"
                height="30px"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
            </button>
          )}

          {(buttonClicked || favIds.includes(id)) && (
            <button
              className={classes["itemgrid__right-btn"]}
              onClick={() => removeFromFavourites(id)}
              style={{
                gridRow: "3/4",
                gridColumn: "2/4",
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
                width="40px"
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
          {!addItem && (<button
            className={classes["itemcard__right-add"]}
            onClick={addToCartHandler}
          >
            add to cart
          </button>)}
          {addItem && (<button
            className={classes["itemcard__right-add--active"]}
            onClick={addToCartHandler}
          >
            added to cart!
          </button>)}
         
          <div className={classes["itemcard__right-description"]}>
            
              <p>{description}</p>
          
          </div>
        </div>

        <Carousel className={classes["itemcard__left"]}>
          <CarouselItem>
            <img width="400px" height="650px" src={pageImages[0]} alt={image}/>
          </CarouselItem>
          <CarouselItem>
            <img width="400px" height="650px" src={pageImages[1]} alt={image}/>
          </CarouselItem>
        </Carousel>
      </div>
      <RecentPages />
    </div>
  );
};

export default ItemCard;
