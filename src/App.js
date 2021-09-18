import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import React from "react";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <React.Fragment>
      <Header />
      {isLogged ? <UserProfile /> : <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
