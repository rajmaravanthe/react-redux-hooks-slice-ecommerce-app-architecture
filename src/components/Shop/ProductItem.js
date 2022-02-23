import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, id, actualPrice } = props;

  const addToCartHandler = () => {
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
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {actualPrice.toFixed(2)}
          </div>
        </header>
        <p>
          Get it for{" "}
          <b>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {price.toFixed(2)}
          </b>
        </p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
