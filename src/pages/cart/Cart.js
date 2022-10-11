import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./Cart.module.scss";

import EmptyCart from "./emptycart/EmptyCart";
import {NavLink} from 'react-router-dom';
import RecentPages from "../../components/recentPages/RecentPages";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
      })
    );
  };
  const removeItem = (item) => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };
  const shipping = 60;
  const priceQuan = cartItems.map((item) => item.price * item.quantity);
  const subtotal = priceQuan.reduce((acc, num) => acc + num, 0);
  return (
    <div className={classes["cart"]}>
      <h2 className={classes["cart__title"]}>Shopping Cart</h2>
      {cartItems.length === 0 ? 
        <EmptyCart />
       : 
        <div className={classes["cart__items"]}>
          <ul className={classes["cart__items-list"]}>
            <div className={classes["cart__items-titles"]}>
              <span className={classes["cart__items-titles-product"]}>
                product
              </span>
              <span className={classes["cart__items-titles-price"]}>price</span>
              <span className={classes["cart__items-titles-subtotal"]}>
                subtotal
              </span>
            </div>
            {cartItems.map((item, i) => (
              <li key={i} className={classes["cart__item"]}>
                <span className={classes["cart__item-name"]}>{item.name}</span>
                <span className={classes["cart__item-price"]}>
                  ${item.price}
                </span>
                <img src={item.image} className={classes["cart__item-img"]} alt={item.title}/>
                <div className={classes["cart__item-buttons"]}>
                  <span className={classes["cart__item-buttons-title"]}>
                    QTY
                  </span>
                  <button
                    className={classes["cart__item-buttons-rem"]}
                    onClick={() => removeItem(item)}
                  >
                    -
                  </button>
                  <span className={classes["cart__item-buttons-qty"]}>
                    {item.quantity}
                  </span>
                  <button
                    className={classes["cart__item-buttons-add"]}
                    onClick={() => addItem(item)}
                  >
                    +
                  </button>
                </div>
                <span className={classes["cart__item-subtotal"]}>{`$${
                  item.price * item.quantity
                }`}</span>
              </li>
            ))}
          </ul>

          <div className={classes["totalprice"]}>
            <span className={classes["totalprice__subtotal-title"]}>
              subtotal
            </span>
            <span className={classes["totalprice__subtotal-num"]}>
              ${subtotal}
            </span>
            <span className={classes["totalprice__shipping-title"]}>
              shipping
            </span>
            <span className={classes["totalprice__shipping-num"]}>
              ${shipping}
            </span>
            <span className={classes["totalprice__total-title"]}>total</span>
            <span className={classes["totalprice__total-num"]}>
              ${shipping + subtotal}
            </span>
          </div>

          <div className={classes['cart__items-btngroup']}>
            <NavLink className={classes['cart__items-btngroup-shop']} to="/shop">continue shopping</NavLink>
            <NavLink className={classes['cart__items-btngroup-checkout']} to="/checkout">place order</NavLink>
          </div>
        </div>
      }
      <RecentPages />
    </div>
  );
};

export default Cart;
