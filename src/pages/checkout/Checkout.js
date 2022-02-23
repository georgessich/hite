import classes from "./Checkout.module.scss";
import { useSelector } from "react-redux";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <section className={classes["checkout"]}>
      <h2 className={classes["checkout__title"]}>Confirm the Order</h2>
      <div className={classes["checkout__container"]}>
        <div className={classes["checkout__review"]}>
          <div className={classes["checkout__container-title"]}>
            Please review your order:
          </div>
          <div className={classes["checkout__review-container"]}>
            <span className={classes["checkout__review-product"]}>product</span>
            <span className={classes["checkout__review-color"]}>color</span>
            <span className={classes["checkout__review-quantity"]}>
              quantity
            </span>
            <span className={classes["checkout__review-subtotal"]}>
              subtotal
            </span>
            <ul className={classes["checkout__items"]}>
            {cartItems.map((item) => (
              <li className={classes["checkout__item"]}>
                <img
                  className={classes["checkout__item-img"]}
                  src={item.image}
                  alt="item"
                />
                <span className={classes["checkout__item-name"]}>
                  {item.name}
                </span>
                <span className={classes["checkout__item-color"]}>
                  {item.color}
                </span>
                <span className={classes["checkout__item-qty"]}>
                  {item.quantity}
                </span>
                <span className={classes["checkout__item-subtotal"]}>
                  {item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
          </div>
         
        </div>

        <form className={classes["checkout__form"]}>
          <span className={classes["checkout__form-title"]}>
            Personal Information
          </span>
          <span className={classes["checkout__form-subtitle"]}>
            Billing Address
          </span>
          <label className={classes["checkout__form-name--label"]} htmlFor="name">
            full name
          </label>
          <input
            className={classes["checkout__form-name--input"]}
            type="text"
            id="name"
          />
          <label
            className={classes["checkout__form-email--label"]}
            htmlFor="email"
          >
            e-mail
          </label>
          <input
            className={classes["checkout__form-email--input"]}
            type="email"
            id="email"
          />
          <label
            className={classes["checkout__form-street--label"]}
            htmlFor="street"
          >
            street address
          </label>
          <input
            className={classes["checkout__form-street--input"]}
            type="text"
            id="street"
          />
          <label className={classes["checkout__form-apt--label"]} htmlFor="apt">
            apt./suite/etc.
          </label>
          <input
            className={classes["checkout__form-apt--input"]}
            type="text"
            id="apt"
          />
          <label className={classes["checkout__form-town--label"]} htmlFor="town">
            town/city
          </label>
          <input
            className={classes["checkout__form-town--input"]}
            type="text"
            id="town"
          />
          <label className={classes["checkout__form-zip--label"]} htmlFor="zip">
            zip-code
          </label>
          <input
            className={classes["checkout__form-zip--input"]}
            type="text"
            id="zip"
          />
          <label className={classes["checkout__form-country--label"]} htmlFor="select">
            country
          </label>
          <select className={classes["checkout__form-country--input"]} id="select">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
          <label className={classes["checkout__form-state--label"]} htmlFor="select">
            state
          </label>
          <select className={classes["checkout__form-state--input"]} id="select">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
          <label className={classes["checkout__form-tel--label"]} htmlFor="tel">
            phone number
          </label>
          <input className={classes["checkout__form-tel--input"]} type="tel" id="tel" />
          <input
            className={classes["checkout__form-check--input"]}
            type="checkbox"
            id="diff"
          />
          <label className={classes["checkout__form-check--label"]} htmlFor="diff">
            ship to a different address?
          </label>

          <label className={classes["checkout__form-notes--label"]} htmlFor="notes">
            order notes
          </label>
          <textarea
            className={classes["checkout__form-notes--input"]}
            rows="10"
            id="notes"
          ></textarea>

          <span className={classes["checkout__form-paytitle"]}>Payment Information</span>

          <input
            className={classes["checkout__form-payment--input-1"]}
            type="radio"
            id="payment"
            name="payment"
          />
          <label className={classes["checkout__form-payment--label-1"]} htmlFor="payment">
            via credit cart
          </label>
          <input
            className={classes["checkout__form-payment--input-2"]}
            type="radio"
            id="payment"
            name="payment"
          />
          <label className={classes["checkout__form-payment--label-2"]} htmlFor="payment">
            via PayPal
          </label>

          <label className={classes["checkout__form-cardholder--label"]} htmlFor="cardholdername">
            cardholder name
          </label>
          <input
            className={classes["checkout__form-cardholder--input"]}
            type="text"
            id="cardholdername"
          />
          <label className={classes["checkout__form-cardnumber--label"]} htmlFor="cardnumber">
            card number
          </label>
          <input
            className={classes["checkout__form-cardnumber--input"]}
            type="text"
            id="cardnumber"
          />
          <label className={classes["checkout__form-valid--label"]} htmlFor="valid">
            valid until
          </label>
          <input className={classes["checkout__form-valid--input"]} type="text" id="valid" />
          <label className={classes["checkout__form-cvv--label"]} htmlFor="cvv">
            CVV
          </label>
          <input className={classes["checkout__form-cvv--input"]} type="text" id="cvv" />
        </form>
      </div>
    </section>
  );
};

export default Checkout;
