import { useState } from "react";
import Logo from "../assets/img/foodVilla.jpg";

const loggedInUser = (LoginCheck) => {
  //API to be called and if returns Success => Authenticated else not Authenticated
  return LoginCheck ? true : false;
};

export const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);
const styleObj = {
  backgroundColor: "#02B290",
  border: "3px solid blue",
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header" style={styleObj}>
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {loggedInUser(isLoggedIn) ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
      )}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  );
};
export default Header;
