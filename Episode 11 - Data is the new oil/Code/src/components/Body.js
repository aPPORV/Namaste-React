import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantData1, setRestaurantData1] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleFilter = () => {
    const filteredData = restaurantData1.filter((res) => res.rating >= 4);
    setRestaurantData1(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantData1(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantData1?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="filter-container flex justify-between">
        <div className="search">
          <input
            type="text"
            className="border p-2 rounded"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => {
              const filteredRestaurant = restaurantData1.filter((res) =>
                res?.resName?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2 font-semibold">User Name:</label>
          <input
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={loggedInUser}
            placeholder="Enter your name"
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleFilter}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filterdRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
