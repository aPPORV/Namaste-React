import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
  constructor(props){
    super(props);
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("Parent Component did mount");
}

  render(){
    console.log("parent render");
    return (
      <div className="about">
        <h1>About Us</h1>
        <h2>Welcome to Swiggy!</h2>
        <p>
          At <strong>Swiggy Clone</strong>, we are committed to providing the best food delivery experience for our customers. 
          Our platform connects you with a variety of restaurants in your area, offering a wide range of cuisines 
          to satisfy your cravings.
        </p>
        <p>
          Our mission is to ensure that you enjoy your meals without any hassle. We strive to make food delivery 
          fast, reliable, and enjoyable. With real-time tracking, seamless payments, and a dedicated customer 
          support team, we aim to provide a delightful experience every time you order.
        </p>
        <p>
          Thank you for choosing <strong>Swiggy</strong>! We look forward to serving you your favorite meals.
        </p>
        {/* <User name={"Apporv Jaiswal (function)"} /> */}
        <UserClass name={"First Child"} location={"Goa class"}></UserClass>
        {/* <UserClass name={"Second Child"} location={"US"}></UserClass> */}
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