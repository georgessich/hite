import classes from './TotalPrice.module.scss';
const TotalPrice = (props) => {
    const shipping = 60;
    const priceQuan = props.cartItems.map((item) => item.price * item.quantity);
    const subtotal = priceQuan.reduce((acc, num) => acc + num, 0)
    console.log(subtotal)
    return (
        <div className={classes['totalprice']}>
            <span className={classes['totalprice__subtotal-title']}>subtotal</span>
            <span className={classes['totalprice__subtotal-num']}>${subtotal}</span>
            <span className={classes['totalprice__shipping-title']}>shipping</span>
            <span className={classes['totalprice__shipping-num']}>${shipping}</span>
            <span className={classes['totalprice__total-title']}>total</span>
            <span className={classes['totalprice__total-num']}>${shipping + subtotal}</span>
        </div>
    )
}

export default TotalPrice;