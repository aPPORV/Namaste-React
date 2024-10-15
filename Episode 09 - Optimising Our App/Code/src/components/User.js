import { useState } from "react";
const User = (props) => {
    const [count]= useState(1);
    const [count2]= useState(2);
    

  return (

    <div className="usercard">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>      
      <h2>Name: {props.name} </h2>
      <h3>Location: Goa</h3>
      <h4>Contact: @apporv17</h4>
    </div>
  );
};

export default User;
