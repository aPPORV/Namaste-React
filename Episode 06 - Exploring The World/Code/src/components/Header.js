import swiggylogo from "../../assets/swiggylogo.jpg";
import { useState } from "react";


export const Header = () => {
  let btnName = "Login";

  const [btnNameReact,setBtnNameReact] = useState("Login")
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
          <button className="login" onClick={ ()=>{
            btnName= "Logout";
            btnNameReact ==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            console.log(btnName);
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;