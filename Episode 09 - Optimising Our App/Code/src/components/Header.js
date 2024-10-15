import swiggylogo from "../../assets/swiggylogo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {
  let btnName = "Login";


  const [btnNameReact,setBtnNameReact] = useState("Login")
  const onlineStatus= useOnlineStatus();

  useEffect( ()=>{
    console.log("useEffect called");
  },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={swiggylogo} alt="Burger" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : { onlineStatus ? "🟢" :"🔴"}
          </li>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/grocery">Grocery</Link>
            </li>
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