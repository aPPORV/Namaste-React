import burgerkingImage from "../../assets/burgerkingImage.jpeg";
import kfcImage from "../../assets/kfcImage.jpg";
import pizzahutImage from "../../assets/pizzahutImage.jpg";
import subwayImage from "../../assets/subwayImage.jpeg";
import tacobellImage from "../../assets/tacobellImage.jpeg";
import mcdonaldsImage from "../../assets/mcdonaldsImage.jpeg";
import starbucksImage from "../../assets/starbucksImage.jpeg";
import chipotleImage from "../../assets/chipotleImage.jpg";

const restaurantData = [
    { 
      id: 1, 
      resName: "Burger King", 
      cuisine: "Burger, Cold Drink", 
      rating: 3.9, // changed to less than 4
      deliveryTime: "38 mins", 
      image: burgerkingImage 
    },
    { 
      id: 2, 
      resName: "KFC", 
      cuisine: "Burger, Fast Food", 
      rating: 3.8, // changed to less than 4
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
      rating: 3.5, // changed to less than 4
      deliveryTime: "20 mins", 
      image: subwayImage 
    },
    { 
      id: 5, 
      resName: "Taco Bell", 
      cuisine: "Tacos, Fast Food", 
      rating: 3.9, // changed to less than 4
      deliveryTime: "35 mins", 
      image: tacobellImage 
    },
    { 
      id: 6, 
      resName: "McDonald's", 
      cuisine: "Burger, Fast Food", 
      rating: 4.0, 
      deliveryTime: "40 mins", 
      image: mcdonaldsImage 
    },
    { 
      id: 7, 
      resName: "Starbucks", 
      cuisine: "Coffee, Snacks", 
      rating: 4.6, 
      deliveryTime: "15 mins", 
      image: starbucksImage 
    },
    { 
      id: 8, 
      resName: "Chipotle", 
      cuisine: "Mexican, Fast Food", 
      rating: 4.2, 
      deliveryTime: "30 mins", 
      image: chipotleImage 
    },
];

export default restaurantData; 
