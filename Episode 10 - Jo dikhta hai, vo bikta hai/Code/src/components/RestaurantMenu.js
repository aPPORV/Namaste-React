import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // Safely extract itemCards with a fallback
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu p-8 bg-white shadow-md rounded-md max-w-3xl mx-auto my-8">
      <h1 className="menu-title text-4xl font-bold text-gray-800 mb-6">{name}</h1>
      <p className="menu-info text-gray-600 mb-6">
        <span className="menu-cuisines">{cuisines.join(", ")}</span>
        <span className="menu-cost ml-4">{costForTwoMessage}</span>
      </p>
      <h2 className="menu-items-title text-2xl font-bold text-gray-700 mb-4">Menu Items</h2>
      <ul className="menu-items space-y-4">
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id} className="menu-item flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
              <span className="item-name font-semibold text-gray-800">{item?.card?.info?.name}</span>
              <span className="item-price text-green-600 font-medium">
                ₹{item?.card?.info.price / 100 || item?.card?.info?.variantsV2?.pricingModels[0]?.price}
              </span>
            </li>
          ))
        ) : (
          <li className="menu-item text-gray-500">No menu items available.</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
