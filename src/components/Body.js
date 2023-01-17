import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const filterData = (searchTxt, restaurants) => {
  if (searchTxt === "") return restaurants;
  return restaurants.filter((restro) =>
    restro.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
};
const Body = () => {
  //searchTxt is a local variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); //to create state variables

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.135382&lng=75.852014&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("component re-rendered");

  //Conditional rendering
  // if restaurant is empty => shimmer Ui
  // if restaurant has data => actual Data UI

  return allRestaurants.length === 0 ? (
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
        {filteredRestaurants.map((each) => (
          <RestaurantCard {...each.data} key={each.data.id} />
        ))}

        {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} /> */}
      </div>
    </>
  );
};

export default Body;
