import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo);

    const {
        itemCards,
    } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

    return (
        <div className="menu p-8">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-600 mb-4">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul className="list-disc ml-6">
                {itemCards &&
                    itemCards.map((item) => (
                        <li
                            key={item.card.info.id}
                            className="text-lg mb-2 flex justify-between"
                        >
                            <span>{item.card.info.name}</span>
                            <span className="font-bold">
                                Rs. {item.card.info.price / 100 ||
                                item.card.info.defaultPrice / 100}
                            </span>
                        </li>
                    ))}
            </ul>
            <p className="text-gray-600 mt-4">
                {!itemCards ? "No Menu Found" : ""}
            </p>
        </div>
    );
};

export default RestaurantMenu;
