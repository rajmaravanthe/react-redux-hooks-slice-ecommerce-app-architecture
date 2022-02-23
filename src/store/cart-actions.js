import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        })
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
