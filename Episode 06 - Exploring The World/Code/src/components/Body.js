import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

import burgerkingImage from "../../assets/burgerkingImage.jpeg";
import kfcImage from "../../assets/kfcImage.jpg";
import pizzahutImage from "../../assets/pizzahutImage.jpg";
import subwayImage from "../../assets/subwayImage.jpeg";

const Body = () => {

  console.log("Body Renderes");

  const [restaurantData1, setRestaurantData1] = useState([]);

  const [filterdRestaurant, setFilterdRestaurant] = useState([])

  const [searchText,setSearchText] = useState("");

  const handleFilter = () => {
    const filteredData = restaurantData1.filter((res) => res.rating >= 4);
    setRestaurantData1(filteredData); 
    console.log(filteredData); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    // https://corsproxy.io/?
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

      const json =await data.json();
      console.log(json);
      setRestaurantData1(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  }


  // if(restaurantData1.length === 0 ){
  //   return <Shimmer />
  // }

  return (restaurantData1?.length === 0) ? (
  <Shimmer/> 
  ):(
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input type="text" className="search-box"  value={searchText} 
          onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className="search-button" onClick={()=>{
            console.log(searchText);
            const filterdRestaurant= restaurantData1.filter(
              (res) => res.resName.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilterdRestaurant(filterdRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-button" onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        { filterdRestaurant?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            // resName={restaurant.resName}
            // cuisine={restaurant.cuisine}
            // rating={restaurant.rating}
            // deliveryTime={restaurant.deliveryTime}
            // image={restaurant.image}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
