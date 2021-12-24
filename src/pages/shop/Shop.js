import ItemGrid from "./itemgrid/ItemGrid";
import Sidebar from "./sidebar/Sidebar";
import classes from "./Shop.module.scss";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect, useMemo } from "react";
const GET_ITEMS = gql`
  query {
    itemCards {
      image
      title
      price
      materials
      category {
        category
      }
    }
  }
`;

const Shop = () => {
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const { loading, error, data } = useQuery(GET_ITEMS, {
    onCompleted: data => setFilteredByCategory(data.itemCards)
  });
  const [category, setCategory] = useState([]);
  

    const filteredCards = useMemo (() => filteredByCategory.filter((item) =>
    category.some((category) =>
      [item.category.category].flat().includes(category)
    )
  ), [data, category])

  
  
  if (loading) return "Loading";
  if (error) return `Error ${error.message}`;

  console.log(filteredByCategory);
  console.log(category);

  console.log(filteredCards);
  return (
    <div className={classes["shop"]}>
      <Sidebar data={data} category={category} setCategory={setCategory} />
      <ItemGrid data={filteredCards.length > 0 ? filteredCards : filteredByCategory} />
    </div>
  );
};

export default Shop;
