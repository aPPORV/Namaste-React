import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const dummy="Dummy Data";

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // Safely extract itemCards with a fallback
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  const data = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = data.filter(
    (c) =>
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  

  return (
    <div className="menu p-8 bg-white shadow-md rounded-md max-w-3xl mx-auto my-8">
      <h1 className="menu-title text-4xl font-bold text-gray-800 mb-6">
        {name}
      </h1>
      <p className="menu-info text-gray-600 mb-6">
        <span className="menu-cuisines">{cuisines.join(", ")}</span>
        <span className="menu-cost ml-4">{costForTwoMessage}</span>
      </p>
      {/* categories accordions */}
      {categories.map((categories, index) => (
        //controlled component
        <RestaurantCategory
          key={categories?.card?.card?.title}
          data={categories?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={ () =>{
            // setShowIndex(showIndex === index ? -1 : index);
            setShowIndex(index);
          }
          }
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
