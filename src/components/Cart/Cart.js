import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { cartActions } from "../../store/cart-slice";
import { sendCartData } from "../../store/cart-actions";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const total = cartItems.items.reduce(
    (acc, { totalPrice, totalActualPrice }) => {
      acc.totalPrice = acc.totalPrice + totalPrice;
      acc.totalActualPrice = acc.totalActualPrice + totalActualPrice;
      return acc;
    },
    { totalPrice: 0, totalActualPrice: 0 }
  );

  const discount = total.totalActualPrice - total.totalPrice;

  const CheckOut = () => {
    if (!auth.isAuthenticated) {
      props.history.push("/login");
    } else {
      //to save
      dispatch(sendCartData(cartItems));
      //to clear local storage
      dispatch(
        sendCartData({
          items: [],
          totalQuantity: 0,
        })
      );
      //to clear redux state
      dispatch(
        cartActions.replaceCart({
          items: [],
          totalQuantity: 0,
        })
      );
      props.history.push("/");
    }
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <div>
        {cartItems.items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              actualPrice: item.actualPrice,
            }}
          />
        ))}
      </div>
      <div
        className={[classes.total, "red-color", "font-size-medium"].join(" ")}
      >
        <div>
          <span>Total:</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
          {total.totalPrice.toFixed(2)}
          <span className={classes.itemprice}>
            {" "}
            ( <FontAwesomeIcon icon={faIndianRupeeSign} />
            {discount.toFixed(2)} discount)
          </span>
        </div>
      </div>
      <div className={[classes.checkout, "white-color"].join(" ")}>
        <button className='white-color' onClick={CheckOut}>
          Checkout
        </button>
      </div>
    </Card>
  );
};

export default withRouter(Cart);
