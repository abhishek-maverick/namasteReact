import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/*********
    Header
        -Logo
        -Nav Items
        -Cart
    Body
         - Search Bar
         - RestaurantList
           -Restaurant Card(many cards)
             -Image
             -Name
             -Rating
             -Cusines
    Footer
        -links
        -CopyRight
*********/

//according to react convention name of a component should start with a capital letter
// functional component is a normal function

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
