import React from "react";
import ReactDOM from "react-dom/client";
import swiggylogo from "./assets/swiggylogo.jpg";
import burgerkingImage from "./assets/burgerkingImage.jpeg";
import kfcImage from "./assets/kfcImage.jpg";
import pizzahutImage from "./assets/pizzahutImage.jpg";
import subwayImage from "./assets/subwayImage.jpeg";
import tacobellImage from "./assets/tacobellImage.jpeg";
import mcdonaldsImage from "./assets/mcdonaldsImage.jpeg";
import starbucksImage from "./assets/starbucksImage.jpeg";
import chipotleImage from "./assets/chipotleImage.jpg";


const restaurantData = [
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
    rating: 4.1, 
    deliveryTime: "20 mins", 
    image: subwayImage 
  },
  { 
    id: 5, 
    resName: "Taco Bell", 
    cuisine: "Tacos, Fast Food", 
    rating: 4.3, 
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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={swiggylogo} alt="Burger" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ opacity: '1' }}>
      <img className="res-logo" alt={`${props.resName} logo`} src={props.image} />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating} stars</h4>
      <h3>{props.deliveryTime}</h3>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Burger App. All rights reserved.</p>
      <ul className="footer-links">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

const Body =() =>{
  return(
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
      {restaurantData.map((restaurant) => (
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
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      {/* Header */}
      {/* Body */}
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);
