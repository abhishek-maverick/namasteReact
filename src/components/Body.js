import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchTxt, restaurants) => {
  if (searchTxt === "") return restaurants;
  return restaurants.filter((restro) =>
    restro?.data?.name.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
};

const Body = () => {
  //searchTxt is a local variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); //to create state variables
  // const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);

  useEffect(() => {
    // fetchLocation();
    getRestaurants();
  });

  async function fetchLocation() {
    await navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }
  async function getRestaurants() {
    const lat = 12.913913181622942;
    const long = 77.49490890651941;
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data?.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional rendering
  // if restaurant is empty => shimmer Ui
  // if restaurant has data => actual Data UI

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            //update the state - restaurants variable
            const updatedData = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(updatedData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant matches your search...:(</h1>
        ) : (
          filteredRestaurants?.map((each) => (
            <Link to={"restaurant/" + each.data.id} key={each.data.id}>
              <RestaurantCard {...each.data} />
            </Link>
          ))
        )}

        {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} /> */}
      </div>
    </>
  );
};

export default Body;
