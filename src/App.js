import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import NotFound from "./components/UI/NotFound";
import Auth from "./components/Auth/Auth";
import User from "./components/User/UserProfile";

import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/products' />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/login'>
            <Auth />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;
