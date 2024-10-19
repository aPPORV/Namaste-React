import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems, setShowIndex, dummy}) => {
  const { title, itemCards } = data; 
  const handleClick = () => {
    setShowIndex();

  };
//   const [showItems, setShowItems] = useState(false);

  return (
    <div
      className="category my-6 p-4 border border-gray-300 rounded-md shadow-sm cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="category-title text-2xl font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      {/* Display the items using the ItemList component */}
      {showItems && <ItemList items={itemCards}  dummy={dummy}/>}
    </div>
  );
};

export default RestaurantCategory;
