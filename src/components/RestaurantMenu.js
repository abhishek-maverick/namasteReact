import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  // how to read a dynamic URL params

  const params = useParams();
  const { id } = params;
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.913913181622942&lng=77.49490890651941&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant - {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          style={{ width: "500px", height: "400px" }}
        ></img>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul tyle={{ disply: "flex" }}>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
