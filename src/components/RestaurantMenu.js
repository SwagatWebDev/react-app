import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {RES_MENU_API_URL} from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API_URL+ resId);
        const response = await data.json();
        setResInfo(response.data);
    }

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo);

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards && itemCards.map((item) => (
                  <li key={item.card.info.id}>
                      {item.card.info.name} - {" Rs."}
                      {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                  </li>
                ))}
            </ul>
            <p>{!itemCards ? "No Menu Found" : ""}</p>
        </div>
    );
};

export default RestaurantMenu;
