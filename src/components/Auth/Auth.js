import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import classes from "./Auth.module.css";
import { authActions } from "../../store/auth-slice";
import { useEffect } from "react";

const Auth = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [auth, props.history]);

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default withRouter(Auth);
