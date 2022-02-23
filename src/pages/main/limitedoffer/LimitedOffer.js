import classes from './LimitedOffer.module.scss';
import { NavLink } from 'react-router-dom';
const LimitedOffer = () => {
  return (
    <div className={classes['offer']}>
      <span className={classes["offer__title"]}>Limited Offer!</span>
      <div className="offer__item">
        <span className={classes["offer__item-title"]}>Ashlynn Sofa</span>
        <p className={classes["offer__item-descr"]}>
          The perfect addition to your living room, this black sofa's chic
          design and high-quality fabric will provide an extra dose of class to
          your space.
        </p>
        <button className={classes["offer__item-btn"]}>Get the Offer!</button>
      </div>
    </div>
  );
};

export default LimitedOffer;
