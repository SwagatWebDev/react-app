import {useDispatch, useSelector} from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import {clearItem} from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    // useSelector((store) => store);
    //
    // const cartItems = store.cart.item;

    const dispatch = useDispatch();

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        return cartItems.reduce((total, item) => {
            const itemPrice = item.card.info.price || item.card.info.defaultPrice || 0;
            totalPrice += itemPrice;
            return Math.round(totalPrice / 100);
        }, 0)
    };

    const handleProceedToCheckout = () => {
        console.log('Proceeding Checkout')
    }

    const handleClearCart = () => {
        dispatch(clearItem());
    }

    console.log(cartItems);

    return (
        <div className="cart-page text-center p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Cart</h1>
            <div className="w-6/12 mx-auto">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-center rounded-full"
                        onClick={handleClearCart}
                        disabled={cartItems.length === 0}>
                    Clear Cart
                </button>
                {cartItems.length === 0 ? (<h1 className="text-gray-600 font-bold mt-4">Cart is empty. Add Items to the cart!</h1>):
                    (
                        <div>
                            <RestaurantItemList items={cartItems}/>
                            <div className="mt-4">
                                <p className="text-lg font-bold">Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center mt-4 hover:bg-blue-700"
                                        onClick={handleProceedToCheckout}>
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Cart;
