import Hero from "./hero/Hero";
import Menu from "./menu/Menu";

import LimitedOffer from "./limitedoffer/LimitedOffer";
import classes from './Main.module.scss';
const Main = () => {
  return (
    <section className={classes["main"]}>
      <Hero></Hero>
      <Menu></Menu>
      <LimitedOffer></LimitedOffer>
    </section>
  );
};

export default Main;
