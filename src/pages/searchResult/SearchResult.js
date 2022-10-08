import React from "react";
import classes from "./SearchResult.module.scss";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import MiniSearch from "minisearch";
import { NavLink } from "react-router-dom";
import ShopQueryWrapper from "../../components/shopQueryWrapper/shopQueryWrapper";
export default function SearchResult() {
  const queryNew = useSelector((state) => state.search.searchQuery);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `https://hite-ae54f-default-rtdb.europe-west1.firebasedatabase.app/items.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      const loadedItems = [];
      for (const key in data) {
        loadedItems.push({
          id: data[key].id,
          rating: data[key].rating,
          price: data[key].price,
          title: data[key].title,
          image: data[key].image,
          category: data[key].category,
          materials: data[key].materials,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    };
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    setFilteredItems(items);
    let miniSearch = new MiniSearch({
      fields: ["title", "category"],
      storeFields: ["title", "category", "image", "id", "price"],
    });
    miniSearch.addAll(items);
    let filteredItemsByInput = miniSearch.search(queryNew);
    setFilteredItems(filteredItemsByInput);
  }, [queryNew, items.length]);

  return (
    <div className={classes["searchresult"]}>
      <h2 className={classes["searchresult__title"]}>Search results: {queryNew}</h2>
      <div className={classes['searchresult__container']}>
      <ShopQueryWrapper data={filteredItems} loading={isLoading} error={httpError}>
        <ul className={classes['searchresult__items']}>
          {filteredItems?.map((item) => (
            <li>
              <NavLink
                to={`/shop/product/${item.id}`}
                key={item.id}
                className={classes["searchresult__item"]}
              >
                <img
                  className={classes["searchresult__item-img"]}
                  src={item.image}
                  alt="itemcard"
                />
                <span className={classes["searchresult__item-title"]}>
                  {item.title}
                </span>
                <span className={classes["searchresult__item-price"]}>
                  ${item.price}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </ShopQueryWrapper>
      </div>
    </div>
  );
}
