import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categoryType = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(category => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categoryType);

    return (
        <div className="menu p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-600">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categoryType.map((category, index) =>
                (
                    <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex((prevIndex) => (prevIndex === null || prevIndex !== index) ? index : null)}
                    />
                )
            )}
        </div>
    );
};

export default RestaurantMenu;
