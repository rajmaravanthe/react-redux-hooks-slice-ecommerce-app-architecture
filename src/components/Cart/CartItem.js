import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, actualPrice } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        actualPrice,
      })
    );
  };

  return (
    <div className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (<FontAwesomeIcon icon={faIndianRupeeSign} />
            {price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
