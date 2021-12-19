import classes from './Hero.module.scss';
const Hero = () => {
  return (
    <div className={classes["hero"]}>
      <h1 className={classes["hero__title"]}>New season is here!</h1>
      <span className={classes["hero__subtitle"]}>Make everyday life brighter with our new 2021 collection!</span>
      <button className={classes["hero__btn"]}>Browse Collection</button>
    </div>
  );
};

export default Hero;
