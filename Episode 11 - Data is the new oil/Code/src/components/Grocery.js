// import potatoImage from "../../assets/potato.jpg";
// import tomatoImage from "../../assets/tomato.jpg";
// import onionImage from "../../assets/onion.jpg"
// import burgerkingImage from "../../assets/burgerkingImage.jpeg";
// const Grocery = () =>{
//     return (<h1>
//         Our Grocery online store, and we have a lot of child component inside this web page!!!
//     </h1>
//     )

// }

// export default Grocery;

// const Grocery = () => {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//           Welcome to Our Grocery Online Store
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-8">
//           Discover a wide range of products at great prices! We have everything you need for your daily grocery shopping.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Tomato Product Card */}
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <img 
//               src="https://via.placeholder.com/150" 
//               alt="Tomato" 
//               className="w-full h-32 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-800">Tomato</h2>
//             <p className="text-gray-600">Fresh red tomatoes, perfect for salads and cooking.</p>
//             <span className="block text-lg font-bold text-green-600 mt-2">₹ 40 per kg</span>
//           </div>
          
//           {/* Potato Product Card */}
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <img 
//               src="https://via.placeholder.com/150" 
//               alt="Potato" 
//               className="w-full h-32 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-800">Potato</h2>
//             <p className="text-gray-600">High-quality potatoes, versatile for various dishes.</p>
//             <span className="block text-lg font-bold text-green-600 mt-2">₹ 30 per kg</span>
//           </div>
          
//           {/* Onion Product Card */}
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <img 
//               src="" 
//               alt="Onion" 
//               className="w-full h-32 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-800">Onion</h2>
//             <p className="text-gray-600">Fresh onions, essential for cooking and flavoring.</p>
//             <span className="block text-lg font-bold text-green-600 mt-2">₹ 20 per kg</span>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Grocery;

import potatoImage from "../../assets/potato.jpg";
import tomatoImage from "../../assets/tomato.jpg";
import onionImage from "../../assets/onion.jpg";

const Grocery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Welcome to Our Grocery Online Store
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover a wide range of products at great prices! We have everything you need for your daily grocery shopping.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tomato Product Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img 
            src={tomatoImage} 
            alt="Tomato" 
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Tomato</h2>
          <p className="text-gray-600">Fresh red tomatoes, perfect for salads and cooking.</p>
          <span className="block text-lg font-bold text-green-600 mt-2">₹ 40 per kg</span>
        </div>
        
        {/* Potato Product Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img 
            src={potatoImage} 
            alt="Potato" 
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Potato</h2>
          <p className="text-gray-600">High-quality potatoes, versatile for various dishes.</p>
          <span className="block text-lg font-bold text-green-600 mt-2">₹ 30 per kg</span>
        </div>
        
        {/* Onion Product Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img 
            src={onionImage} 
            alt="Onion" 
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Onion</h2>
          <p className="text-gray-600">Fresh onions, essential for cooking and flavoring.</p>
          <span className="block text-lg font-bold text-green-600 mt-2">₹ 20 per kg</span>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
