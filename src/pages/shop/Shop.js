import ItemGrid from "./itemgrid/ItemGrid";
import Sidebar from "./sidebar/Sidebar";
import classes from "./Shop.module.scss";
import { useState, useMemo, useEffect } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
const Shop = () => {
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [category, setCategory] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  useEffect (() => {
    const fetchItems = async () => {
      const response = await fetch (`https://hite-ae54f-default-rtdb.europe-west1.firebasedatabase.app/items.json`)
      if(!response.ok) {
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();
  
      const loadedItems = [];
  
      for (const key in responseData) {
        loadedItems.push({
          id: responseData[key].id,
          rating: responseData[key].rating,
          price: responseData[key].price,
          title: responseData[key].title,
          image: responseData[key].image,
          category: responseData[key].category
        })
      }
    
      setFilteredByCategory(loadedItems);
      console.log(filteredByCategory)
      setIsLoading(false);
    }
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message)
    })
  }, [category, materials, priceMax, priceMin])
 
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
          (category &&
            category.some((category) =>
              [item.category].flat().includes(category)
            )) ||
          (materials &&
            materials.some((material) =>
              [item.materials].flat().includes(material)
            )) ||
          (category &&
            materials &&
            category.some((category) =>
              [item.category].flat().includes(category)
            ) &&
            materials.some((material) =>
              [item.materials].flat().includes(material)
            ))

        // (category.some((category) =>
        //   [item.category.category].flat().includes(category)
        // ) &&
        //   materials.some((material) =>
        //     [item.materials].flat().includes(material)
        //   ))
      ),
    [category, materials, filteredByCategory, priceMin, priceMax]
  );

  if (isLoading) return <LoadingSpinner />;
  if (httpError) return `Error ${httpError.message}`;

  console.log(filteredByCategory);
  console.log(priceMin);
  console.log(priceMax);
  console.log(filteredCards);
  console.log(category)
  return (
    <div className={classes["shop"]}>
      <Sidebar
        data={filteredByCategory}
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
        {filteredCards?.length > 0
          ? filteredCards?.map((itemCard) => (
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
