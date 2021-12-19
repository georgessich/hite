import Hero from "./hero/Hero";
import Menu from "./menu/Menu";
import PopularItems from "./popularitems/PopularItems";
import LimitedOffer from "./limitedoffer/LimitedOffer";
const Main = () => {
  return (
    <div>
      <Hero></Hero>
      <Menu></Menu>
      <PopularItems></PopularItems>
      <LimitedOffer></LimitedOffer>
    </div>
  );
};

export default Main;
