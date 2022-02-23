import { useSelector } from "react-redux";

import cartImage from "../../assets/images/cart.svg";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button>
      <img src={cartImage} alt='' />
      <span
        className={[classes.badge, "white-color", "font-size-medium"].join(" ")}
      >
        {cartQuantity}
      </span>
      <p className={["white-color", "font-size-medium"].join(" ")}>Cart</p>
    </button>
  );
};

export default CartButton;
