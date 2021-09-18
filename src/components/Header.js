import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Header = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  function onLogoutHandler() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <header className={classes.header}>
      <h1>Levw Redux Auth</h1>
      {isLogged && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
