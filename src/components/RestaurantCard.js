import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  // const { cloudinaryImageId, name, cuisines, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card">
      {console.log()}
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2> {name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
export default RestaurantCard;
