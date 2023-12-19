import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantItemList = ({ items }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const isInCart = (itemId) => cartItems.some((item) => item.card.info.id === itemId);

    const handleAddOrRemoveItem = (item) => {
        if (isInCart(item.card.info.id)) {
            // If the item is in the cart, remove it
            dispatch(removeItem(item.card.info.id));
        } else {
            // If the item is not in the cart, add it
            dispatch(addItem(item));
        }
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                - ₹{item.card.info.price ? Math.round(item.card.info.price / 100) : Math.round(item.card.info.defaultPrice / 100)}
              </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <button
                            className="absolute p-2 mx-1.5 rounded-sm my-28 bg-gray-50 text-white shadow-lg w-28"
                            onClick={() => handleAddOrRemoveItem(item)}
                        >
              <span className={`mr-2 ${isInCart(item.card.info.id) ? "text-red-500" : "text-green-500"}`}>
                {isInCart(item.card.info.id) ? "REMOVE" : "ADD"}
              </span>
                            <span className={`absolute bottom-6 right-0 ${isInCart(item.card.info.id) ? "text-red-500" : "text-green-500"}`}>{isInCart(item.card.info.id) ? "-" : "+"}</span>
                        </button>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantItemList;
