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
    onCompleted: (data) => setFilteredByCategory(data.itemCards),
  });
  const [category, setCategory] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const filteredCards = useMemo(
    () =>
      filteredByCategory.filter(
        (item) =>
          category.some((category) =>
            [item.category.category].flat().includes(category)
          ) ||
          materials.some((material) =>
            [item.materials].flat().includes(material)
          ) || (priceMin < parseInt(item.price.slice(1)) && priceMax > parseInt(item.price.slice(1)))
          // (category.some((category) =>
          //   [item.category.category].flat().includes(category)
          // ) &&
          //   materials.some((material) =>
          //     [item.materials].flat().includes(material)
          //   ))
            
      ),
    [category, materials, filteredByCategory, priceMin, priceMax]
  );

  if (loading) return "Loading";
  if (error) return `Error ${error.message}`;
  console.log(data);
  console.log(filteredByCategory);
  console.log(priceMin);
  console.log(priceMax);
  console.log(filteredCards);
  return (
    <div className={classes["shop"]}>
      <Sidebar
        data={data}
        category={category}
        setCategory={setCategory}
        materials={materials}
        setMaterials={setMaterials}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
      <ItemGrid
        data={filteredCards.length > 0 ? filteredCards : data.itemCards}
      />
    </div>
  );
};

export default Shop;
