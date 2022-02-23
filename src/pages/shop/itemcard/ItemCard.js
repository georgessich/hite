import classes from "./ItemCard.module.scss";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Rating } from 'react-simple-star-rating'

const GET_ITEM = gql`
  query ($slug: String!) {
    itemCard(slug: $slug) {
      id
      image
      title
      price
      materials
      rating
    }
  }
`;
const ItemCard = () => {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_ITEM, {
    variables: {
      slug,
    },
  });

  if (loading) return <div>loading...</div>;

  if (error) return <div>error...</div>;

  console.log(data.itemCard.rating);

  return <div>itemcard{data.itemCard.title}
  <Rating ratingValue={data.itemCard.rating * 20} fillColor="#B8D4E3" emptyColor="transparent" size={24} allowHover={false} readonly={true}/></div>;
};

export default ItemCard;
