import {useDispatch, useSelector} from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart-page text-center p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Cart</h1>
            <div className="w-6/12 mx-auto">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-center"
                    onClick={handleClearCart}
                    disabled={cartItems.length === 0}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <h1 className="text-gray-600 font-bold mt-4">
                        Cart is empty. Add Items to the cart!
                    </h1>
                )}
                <RestaurantItemList items={cartItems}/>
            </div>
        </div>
    );
}
export default Cart;
