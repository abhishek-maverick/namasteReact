import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";

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

// according to react convention name of a component should start with a capital letter
// functional component is a normal function

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      ,
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // => parentPath/{path}, don't have to give slash over here otherwise will be conisdered as localhost:1234/profile
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
