import classes from './ItemGrid.module.scss';

const ItemGrid = (props) => {
    
    return (
        <div className={classes.itemgrid}>
            {props.data.map((itemCard) => (
                <div className={classes['itemgrid__item']}>
                    <img className={classes['itemgrid__item-img']} src={itemCard.image} alt="itemcard" />
                    <span className={classes['itemgrid__item-title']}>{itemCard.title}</span>
                    <span className={classes['itemgrid__item-price']}>{itemCard.price}</span>
                </div>
            ))}
        </div>
    )
}

export default ItemGrid;