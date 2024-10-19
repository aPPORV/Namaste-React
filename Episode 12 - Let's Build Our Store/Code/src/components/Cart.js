import React from 'react'; // Keep this import
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col items-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="mt-4">
                {cartItems.length === 0 ? (
                    <h2 className="text-lg">Your cart is empty. Add items to the cart!</h2>
                ) : (
                    <div> 
                        <ItemList items={cartItems} />
                        <button 
                            className="p-2 m-2 bg-black text-white rounded-lg hover:bg-gray-800 transition" 
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
