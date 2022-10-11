import ItemGrid from "./itemgrid/ItemGrid";
import Sidebar from "./sidebar/Sidebar";
import classes from "./Shop.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShopQueryWrapper from "../../components/shopQueryWrapper/shopQueryWrapper";
const Shop = () => {
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);
  console.log(useParams());
  const [slugName, setSlugName] = useState(categoryName);
  const [category, setCategory] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  console.log(category);
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
      if (slugName) {
        let capitalized = slugName.charAt(0).toUpperCase() + slugName.slice(1);
        setCategory(capitalized);
      }
      if (
        category.length === 0 &&
        !priceMin &&
        !priceMax &&
        materials.length === 0
      ) {
        setFilteredByCategory(loadedItems);
      } else if (
        category.length > 0 &&
        !priceMin &&
        !priceMax &&
        materials.length === 0
      ) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter((items) =>
          category.includes(items.category)
        );
        setFilteredByCategory(newProductsList);
      } else if (
        category.length === 0 &&
        priceMin &&
        !priceMax &&
        materials.length === 0
      ) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) => parseInt(item.price) > priceMin
        );
        setFilteredByCategory(newProductsList);
      } else if (
        category.length > 0 &&
        priceMin &&
        !priceMax &&
        materials.length === 0
      ) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            parseInt(item.price) > priceMin && category.includes(item.category)
        );
        setFilteredByCategory(newProductsList);
      } else if (
        (priceMin || priceMax) &&
        category.length > 0 &&
        materials.length === 0
      ) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            parseInt(item.price) > priceMin &&
            parseInt(item.price) < priceMax &&
            category.includes(item.category)
        );
        setFilteredByCategory(newProductsList);
      } else if (
        (priceMin || priceMax) &&
        category.length === 0 &&
        materials.length === 0
      ) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            parseInt(item.price) > priceMin && parseInt(item.price) < priceMax
        );
        setFilteredByCategory(newProductsList);
      } else if (materials && category.length === 0 && !priceMin && !priceMax) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter((item) =>
          materials.includes(item.materials[0] || item.materials[1])
        );
        setFilteredByCategory(newProductsList);
      } else if (materials && category.length > 0 && !priceMin && !priceMax) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            materials.includes(item.materials[0] || item.materials[1]) &&
            category.includes(item.category)
        );
        setFilteredByCategory(newProductsList);
      } else if (materials && category.length > 0 && priceMin && !priceMax) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            materials.includes(item.materials[0] || item.materials[1]) &&
            category.includes(item.category) &&
            parseInt(item.price) > priceMin
        );
        setFilteredByCategory(newProductsList);
      } else if (materials && category.length > 0 && priceMin && priceMax) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            materials.includes(item.materials[0] || item.materials[1]) &&
            category.includes(item.category) &&
            parseInt(item.price) > priceMin &&
            parseInt(item.price) < priceMax
        );
        setFilteredByCategory(newProductsList);
      } else if (materials && category.length > 0 && !priceMin && priceMax) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            materials.includes(item.materials[0] || item.materials[1]) &&
            category.includes(item.category) &&
            parseInt(item.price) < priceMax
        );
        setFilteredByCategory(newProductsList);
      } else if (materials && !category.length > 0 && !priceMin && priceMax) {
        let newProductsList = loadedItems;
        newProductsList = newProductsList.filter(
          (item) =>
            materials.includes(item.materials[0] || item.materials[1]) &&
            parseInt(item.price) < priceMax
        );
        setFilteredByCategory(newProductsList);
      }
      setIsLoading(false);
    };
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [category, priceMin, priceMax, materials, slugName, categoryName]);

  console.log(slugName);
  return (
    <div className={classes["shop"]}>
      <Sidebar
        data={filteredByCategory}
        category={category}
        slugName={slugName}
        setCategory={setCategory}
        materials={materials}
        setMaterials={setMaterials}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
      <ShopQueryWrapper
        data={filteredByCategory}
        error={httpError}
        loading={isLoading}
      >
        <ul className={classes["shop__grid"]}>
          {filteredByCategory?.map((itemCard) => (
            <ItemGrid
              key={itemCard.id}
              id={itemCard.id}
              title={itemCard.title}
              price={itemCard.price}
              image={itemCard.image}
            />
          ))}
        </ul>
      </ShopQueryWrapper>
    </div>
  );
};

export default Shop;
