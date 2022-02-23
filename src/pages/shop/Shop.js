import ItemGrid from "./itemgrid/ItemGrid";
import Sidebar from "./sidebar/Sidebar";
import classes from "./Shop.module.scss";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect, useMemo } from "react";
import ItemCard from "./itemcard/ItemCard";
const GET_ITEMS = gql`
  query {
    itemCards {
      id
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
          // category || materials ?
          //     category.some((category) =>
          //     [item.category.category].flat().includes(category)
          //   ) ||
          //   materials.some((material) =>
          //     [item.materials].flat().includes(material)
          //   ) :
          // category || materials ?
          //   category.some((category) =>
          //     [item.category.category].flat().includes(category)
          //   ) ||
          //   materials.some((material) =>
          //     [item.materials].flat().includes(material)
          //   ) ||
          //   (priceMin < parseInt(item.price.slice(1)) &&
          //     priceMax > parseInt(item.price.slice(1)))
          //     : null
          (category)
            ? (category.some((category) =>
                [item.category.category].flat().includes(category)
              ))
            : 
            ((materials)
            ? (materials.some((material) =>
                [item.materials].flat().includes(material)
              ))
            :null)

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
      <ul className={classes["shop__grid"]}>
        {filteredCards.length > 0
          ? filteredCards.map((itemCard) => (
              <ItemGrid
                id={itemCard.id}
                title={itemCard.title}
                price={itemCard.price}
                image={itemCard.image}
              />
            ))
          : filteredByCategory.map((itemCard) => (
              <ItemGrid
                id={itemCard.id}
                title={itemCard.title}
                price={itemCard.price}
                image={itemCard.image}
              />
            ))}
      </ul>
    </div>
  );
};

export default Shop;
