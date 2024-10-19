import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  //   console.log(dummy);
  handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItems(item));
  };
  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center p-4 m-2 border border-gray-300 rounded-md shadow-sm bg-white hover:shadow-lg transition-shadow"
        >
          <div className="flex-1 pr-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-green-600 font-medium">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <button
              className="absolute bottom-1 right-1 p-1 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-colors"
              onClick={ ()=>handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
