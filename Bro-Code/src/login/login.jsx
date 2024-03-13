import style from "./login.module.css";
import PropTypes from "prop-types";

function Login(props) {
  const LogIn = <h2 className={style.login}>Wellcome {props.userName}</h2>;
  const LogOut = <h2 className={style.logout}>Please Login to Continue!</h2>;
  //   if (props.isLogin) {
  //     return <h2 className={style.login}>Wellcome {props.userName}</h2>;
  //   }
  //   return <h2 className={style.logout}>Please Login to Continue!</h2>;
  return props.isLogin ? LogIn : LogOut;
}

Login.propTypes = {
  userName: PropTypes.string,
  isLogin: PropTypes.bool,
};

Login.defaultProps = {
  userName: "Guest",
  isLogin: false,
};
export default Login;
