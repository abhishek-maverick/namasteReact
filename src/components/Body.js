import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchTxt, restaurants) => {
  if (searchTxt === "") return restaurantList;
  return restaurantList.filter((restro) =>
    restro.data.name.includes(searchTxt)
  );
};
const Body = () => {
  //searchTxt is a local variable
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState(""); //to create state variables

  return (
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
            const updatedData = filterData(searchTxt, restaurants);
            setRestaurants(updatedData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((each) => (
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
