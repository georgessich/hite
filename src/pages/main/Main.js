import Hero from "./hero/Hero";
import Menu from "./menu/Menu";
import PopularItems from "./popularitems/PopularItems";
import LimitedOffer from "./limitedoffer/LimitedOffer";
import classes from './Main.module.scss';
const Main = () => {
  return (
    <section className={classes["main"]}>
      <Hero></Hero>
      <Menu></Menu>
      <PopularItems></PopularItems>
      <LimitedOffer></LimitedOffer>
    </section>
  );
};

export default Main;
