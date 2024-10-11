import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/constants";
import { useState } from "react";

import burgerkingImage from "../../assets/burgerkingImage.jpeg";
import kfcImage from "../../assets/kfcImage.jpg";
import pizzahutImage from "../../assets/pizzahutImage.jpg";
import subwayImage from "../../assets/subwayImage.jpeg";



const Body = () => {

  //Local state varaible -- super powerful variable

  const [restaurantData1,setRestaurantData1] = useState(restaurantData);

  //Empty list in restaurantData1-
  // setRestaurantData1([])
  
  //Normal Js variable
  let restaurantDataJS = [
    { 
      id: 1, 
      resName: "Burger King", 
      cuisine: "Burger, Cold Drink", 
      rating: 4.4, 
      deliveryTime: "38 mins", 
      image: burgerkingImage 
    },
    { 
      id: 2, 
      resName: "KFC", 
      cuisine: "Burger, Fast Food", 
      rating: 4.2, 
      deliveryTime: "30 mins", 
      image: kfcImage 
    },
    { 
      id: 3, 
      resName: "Pizza Hut", 
      cuisine: "Pizza, Fast Food", 
      rating: 4.5, 
      deliveryTime: "25 mins", 
      image: pizzahutImage 
    },
    { 
      id: 4, 
      resName: "Subway", 
      cuisine: "Sandwiches, Fast Food", 
      rating: 3.1, 
      deliveryTime: "20 mins", 
      image: subwayImage 
    }];

    const handleFilter = () => {
      restaurantData1 = restaurantData1.filter(res => res.rating >= 4);
      console.log(restaurantData1);
    };

  return (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="filter-container">
        <button className="filter-button" 
        // onClick= {handleFilter}
        
        // onClick= {() => {
        //   restaurantData1 = restaurantData1.filter(res => res.rating >= 4);
        //   console.log(restaurantData1);
        // }
      // }
      onClick={() => {
        const filteredList = restaurantData1.filter(res => res.rating >= 4);
        setRestaurantData1(filteredList);
      }}
        >
          Top Rated Restaurant
          </button>
      </div>
      <div className="res-container">
        {restaurantData1.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resName={restaurant.resName}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
