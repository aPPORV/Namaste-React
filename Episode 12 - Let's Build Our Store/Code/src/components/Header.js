import swiggylogo from "../../assets/swiggylogo.jpg";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  
  //Selector(Subscribing to the store using a Selector)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-orange-400 shadow-lg p-4">
      <div className="logo-container">
        <img className="w-56" src={swiggylogo} alt="Burger" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 space-x-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
          <li>
            <Link to="/cart" >Cart ({cartItems.length} items)</Link>
            </li>

          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
