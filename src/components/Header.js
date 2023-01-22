import { useState } from "react";
import Logo from "../assets/img/foodVilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = (LoginCheck) => {
  //API to be called and if returns Success => Authenticated else not Authenticated
  return LoginCheck ? true : false;
};

// SPA => Single Page Application ???
// Client Side Routing => routing manipuation in front-end, no need to reload the page
// Server Side Routing => fetch all the details from the server

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
  const isOnline = useOnline();

  return (
    <div className="header" style={styleObj}>
      <Title />
      <h1 style={{ marginLeft: "auto" }}>Food Villa</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h2>{isOnline ? "✅" : "🔴"}</h2>
      {loggedInUser(isLoggedIn) ? (
        <button
          style={{ width: "5%" }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Logout
        </button>
      ) : (
        <button
          style={{ width: "5%" }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Login
        </button>
      )}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  );
};
export default Header;
