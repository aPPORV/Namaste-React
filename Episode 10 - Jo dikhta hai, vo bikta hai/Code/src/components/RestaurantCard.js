import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-[150px] object-cover rounded-t-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">{cuisines.join(", ")}</p>
        <p className="text-sm text-yellow-500 font-semibold">{avgRating} stars</p>
        <p className="text-sm text-gray-700">{costForTwo}</p>
        <p className="text-sm text-gray-500">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
