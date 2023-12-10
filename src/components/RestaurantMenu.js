import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu p-8">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-600">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Menu</h2>
            <ul className="list-disc ml-6">
                {itemCards && itemCards.map((item) => (
                    <li key={item.card.info.id} className="text-lg mb-2">
                        {item.card.info.name} - Rs.
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
            <p className="text-gray-700 mt-4">{!itemCards ? "No Menu Found" : ""}</p>
        </div>
    );
};

export default RestaurantMenu;
