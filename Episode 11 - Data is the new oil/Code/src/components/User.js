import { useState } from "react";

const User = (props) => {
  const [count] = useState(1);
  const [count2] = useState(2);

  return (
    <div className="usercard p-4 bg-white shadow-md rounded-md">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <h2 className="font-bold">Name: {props.name}</h2>
      <h3 className="text-gray-600">Location: Goa</h3>
      <h4>Contact: @apporv17</h4>
    </div>
  );
};

export default User;
