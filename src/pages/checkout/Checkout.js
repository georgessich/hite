import classes from "./Checkout.module.scss";
import { useSelector } from "react-redux";
import deliveryPic from "../../images/fxemoji_package.png";
import { useState } from "react";
import { useAddOrderMutation } from "../../store/fetch-slice";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const [createOrder] = useAddOrderMutation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [apt, setApt] = useState();
  const [town, setTown] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();
  const [order, setOrder] = useState();
  const [payment, setPayment] = useState();
  const [cardholder, setCardholder] = useState();
  const [cardnumber, setCardnumber] = useState();
  const [valid, setValid] = useState();
  const [cvv, setCvv] = useState();
  const navigate = useNavigate();
  let cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  const setPropertyHandler = (value, handler) => {
    handler(value);
  };
  const orderHandler = (
    name,
    email,
    address,
    apt,
    town,
    zip,
    phone,
    order,
    payment,
    cardholder,
    cardnumber,
    valid,
    cvv,
    items
  ) => {
    createOrder({
      name,
      email,
      address,
      apt,
      town,
      zip,
      phone,
      order,
      payment,
      cardholder,
      cardnumber,
      valid,
      cvv,
      items,
    });
    // 
    navigate("/success/");
    navigate(0);
  };
  console.log(
    name,
    email,
    address,
    apt,
    town,
    zip,
    phone,
    order,
    payment,
    cardholder,
    cardnumber,
    valid,
    cvv
  );

  console.log(totalPrice);
  const shipping = 60;
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
                    ${item.price * item.quantity}
                  </span>
                </li>
              ))}
              <li className={classes["checkout__item"]}>
                <img
                  className={classes["checkout__item-img"]}
                  src={deliveryPic}
                  alt={"delivery"}
                />
                <span className={classes["checkout__item-name"]}>shipping</span>
                <span className={classes["checkout__item-color"]}>-</span>
                <span className={classes["checkout__item-qty"]}>-</span>
                <span className={classes["checkout__item-subtotal"]}>
                  ${shipping}
                </span>
              </li>
            </ul>

            <span className={classes["checkout__item-totaltitle"]}>Total</span>
            <span className={classes["checkout__item-totalprice"]}>
              ${totalPrice + shipping}
            </span>
          </div>
        </div>

        <form className={classes["checkout__form"]}>
          <span className={classes["checkout__form-title"]}>
            Personal Information
          </span>
          <span className={classes["checkout__form-subtitle"]}>
            Billing Address
          </span>
          <label
            className={classes["checkout__form-name--label"]}
            htmlFor="name"
          >
            full name
          </label>
          <input
            className={classes["checkout__form-name--input"]}
            type="text"
            id="name"
            onChange={(e) => setPropertyHandler(e.target.value, setName)}
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
            onChange={(e) => setPropertyHandler(e.target.value, setEmail)}
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
            onChange={(e) => setPropertyHandler(e.target.value, setAddress)}
          />
          <label className={classes["checkout__form-apt--label"]} htmlFor="apt">
            apt./suite/etc.
          </label>
          <input
            className={classes["checkout__form-apt--input"]}
            type="text"
            id="apt"
            onChange={(e) => setPropertyHandler(e.target.value, setApt)}
          />
          <label
            className={classes["checkout__form-town--label"]}
            htmlFor="town"
          >
            town/city
          </label>
          <input
            className={classes["checkout__form-town--input"]}
            type="text"
            id="town"
            onChange={(e) => setPropertyHandler(e.target.value, setTown)}
          />
          <label className={classes["checkout__form-zip--label"]} htmlFor="zip">
            zip-code
          </label>
          <input
            className={classes["checkout__form-zip--input"]}
            type="text"
            id="zip"
            onChange={(e) => setPropertyHandler(e.target.value, setZip)}
          />

          <label className={classes["checkout__form-tel--label"]} htmlFor="tel">
            phone number
          </label>
          <input
            className={classes["checkout__form-tel--input"]}
            type="tel"
            id="tel"
            onChange={(e) => setPropertyHandler(e.target.value, setPhone)}
          />

          <label
            className={classes["checkout__form-notes--label"]}
            htmlFor="notes"
          >
            order notes
          </label>
          <textarea
            className={classes["checkout__form-notes--input"]}
            rows="10"
            id="notes"
            onChange={(e) => setPropertyHandler(e.target.value, setOrder)}
          ></textarea>

          <span className={classes["checkout__form-paytitle"]}>
            Payment Information
          </span>

          <input
            className={classes["checkout__form-payment--input-1"]}
            type="radio"
            id="payment"
            name="payment"
            onChange={(e) => setPropertyHandler(e.target.value, setPayment)}
          />
          <label
            className={classes["checkout__form-payment--label-1"]}
            htmlFor="payment"
          >
            via credit cart
          </label>
          <input
            className={classes["checkout__form-payment--input-2"]}
            type="radio"
            id="payment"
            name="payment"
            onChange={(e) => setPropertyHandler(e.target.value, setPayment)}
          />
          <label
            className={classes["checkout__form-payment--label-2"]}
            htmlFor="payment"
          >
            via PayPal
          </label>

          <label
            className={classes["checkout__form-cardholder--label"]}
            htmlFor="cardholdername"
          >
            cardholder name
          </label>
          <input
            className={classes["checkout__form-cardholder--input"]}
            type="text"
            id="cardholdername"
            onChange={(e) => setPropertyHandler(e.target.value, setCardholder)}
          />
          <label
            className={classes["checkout__form-cardnumber--label"]}
            htmlFor="cardnumber"
          >
            card number
          </label>
          <input
            className={classes["checkout__form-cardnumber--input"]}
            type="text"
            id="cardnumber"
            onChange={(e) => setPropertyHandler(e.target.value, setCardnumber)}
          />
          <label
            className={classes["checkout__form-valid--label"]}
            htmlFor="valid"
          >
            valid until
          </label>
          <input
            className={classes["checkout__form-valid--input"]}
            type="text"
            id="valid"
            onChange={(e) => setPropertyHandler(e.target.value, setValid)}
          />
          <label className={classes["checkout__form-cvv--label"]} htmlFor="cvv">
            CVV
          </label>
          <input
            className={classes["checkout__form-cvv--input"]}
            type="text"
            id="cvv"
            onChange={(e) => setPropertyHandler(e.target.value, setCvv)}
          />
          <button
            className={classes["checkout__form-submit"]}
            onClick={() =>
              orderHandler(
                name,
                email,
                address,
                apt,
                town,
                zip,
                phone,
                order,
                payment,
                cardholder,
                cardnumber,
                valid,
                cvv,
                cartItems
              )
            }
          >
            Submit order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
