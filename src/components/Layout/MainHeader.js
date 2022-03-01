import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import signInImage from "../../assets/images/signin.svg";

const MainHeader = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h2>
        <NavLink to='/' activeClassName={classes.active}>
          <p
            className={[
              classes.loginText,
              "white-color",
              "font-size-medium",
            ].join(" ")}
          >
            Raj.com
          </p>
        </NavLink>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to='/cart' activeClassName={classes.active}>
              <CartButton />
            </NavLink>
          </li>
          <li>
            {!isAuth && (
              <NavLink to='/login' activeClassName={classes.active}>
                <button>
                  <img className={classes.auth} src={signInImage} alt='' />
                  <p
                    className={[
                      classes.loginText,
                      "white-color",
                      "font-size-medium",
                    ].join(" ")}
                  >
                    Login
                  </p>
                </button>
              </NavLink>
            )}
            {isAuth && (
              <NavLink to='/user' activeClassName={classes.active}>
                <button>
                  <img className={classes.auth} src={signInImage} alt='' />
                  <p
                    className={[
                      classes.loginText,
                      "white-color",
                      "font-size-medium",
                    ].join(" ")}
                  >
                    User profile
                  </p>
                </button>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
