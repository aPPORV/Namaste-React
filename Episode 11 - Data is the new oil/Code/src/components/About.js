import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="about p-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <h2 className="text-2xl text-gray-600 mb-4">LoggedIn User 
        <UserContext.Consumer>
          {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        </h2>
        <h2 className="text-2xl text-gray-600 mb-4">Welcome to Swiggy!</h2>
        <p className="text-gray-700 mb-4">
          At <strong className="font-semibold">Swiggy Clone</strong>, we are committed to providing the best food delivery experience for our customers. Our platform connects you with a variety of restaurants in your area, offering a wide range of cuisines to satisfy your cravings.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to ensure that you enjoy your meals without any hassle. We strive to make food delivery fast, reliable, and enjoyable. With real-time tracking, seamless payments, and a dedicated customer support team, we aim to provide a delightful experience every time you order.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing <strong className="font-semibold">Swiggy</strong>! We look forward to serving you your favorite meals.
        </p>
        <UserClass name={"First Child"} location={"Goa class"} />
      </div>
    );
  }
}

export default About;

// Parent Constructor
// Parent Render
//   --First Child Constructor
//   --First Child Render


//   --Second Child Constructor
//   --Second Child Render
     
//     <DOM UPDATED -- IN SINGLE Batch>
//   --First Child componentDidMount
//   --Second Child componentDidMount

// Parent componentDidMount

