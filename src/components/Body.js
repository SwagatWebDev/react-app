import { useEffect, useState } from "react";
import RestaurantCard, {withVegetarianRestaurant} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CDN_URL, OFFER_NEAR_BY_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [foodCarousel, setFoodCarousel] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [userName, setUserName] = useState("");
    const [offerCarousel, setOfferCarousel] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    console.log("listOfRestaurants", listOfRestaurants);

    const VegetarianRestaurant = withVegetarianRestaurant(RestaurantCard);

    const handleScroll = (direction, containerName) => {
        const container =
            containerName === "offer-carousel-container"
                ? document.getElementById("offer-carousel-container")
                : document.getElementById("food-carousel-container");
        const scrollAmount =
            containerName === "offer-carousel-container" ? 350 : 280;

        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
            container.scrollLeft += scrollAmount;
        }
    };

    const fetchData = async () => {
        const API_URL =
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const data = await fetch(API_URL);
        const response = await data.json();
        const restaurantListData =
            response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
        const foodCarousel =
            response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
        const offerCarousel =
            response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        setListOfRestaurants(restaurantListData);
        setFilteredRestaurant(restaurantListData);
        setFoodCarousel(foodCarousel);
        setUserName("Swagat");
        setOfferCarousel(offerCarousel);
    };

    const handleSearch = () => {
        const filteredRestaurants = listOfRestaurants.filter(
            (res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                res.info.cuisines.some((dish) =>
                    dish.toLowerCase().includes(searchText.toLowerCase())
                )
        );
        setFilteredRestaurant(filteredRestaurants);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );
    }

    return (listOfRestaurants ?? []).length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body bg-gray-100 p-8">
            <div className="offer-carousel mb-8">
                <h2 className="text-3xl font-bold mb-4 text-green-600">
                    Best offers for you
                </h2>
                {offerCarousel.length >= 4 && (
                    <div className="offer-slide-arrows flex items-center space-x-4">
                        <button
                            className="scroll-button"
                            onClick={() =>
                                handleScroll("left", "offer-carousel-container")
                            }
                        >
                            &larr;
                        </button>
                        <button
                            className="scroll-button"
                            onClick={() =>
                                handleScroll("right", "offer-carousel-container")
                            }
                        >
                            &rarr;
                        </button>
                    </div>
                )}
                <div
                    id="offer-carousel-container"
                    className="offer-carousel-container overflow-x-auto whitespace-nowrap relative"
                >
                    {offerCarousel.map((offer) => (
                        <div
                            key={offer.imageId}
                            className="offer-carousel-item inline-block mr-4 rounded-lg overflow-hidden shadow-lg relative"
                        >
                            <img
                                src={OFFER_NEAR_BY_BASE_URL + offer.imageId}
                                alt={`Food ${offer.id}`}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-0 w-full">
                                <p className="text-gray-700 text-sm mb-2">{offer.name}</p>
                                <p className="text-green-600 font-bold text-lg">
                                    {offer.discount}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="offer-carousel mb-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-600">
                    {`${userName}, what's on your mind?`}
                </h2>
                <div className="food-slide-arrows flex items-center space-x-4">
                    <button
                        className="scroll-button"
                        onClick={() => handleScroll("left", "food-carousel-container")}
                    >
                        &larr;
                    </button>
                    <button
                        className="scroll-button"
                        onClick={() => handleScroll("right", "food-carousel-container")}
                    >
                        &rarr;
                    </button>
                </div>
                <div
                    id="food-carousel-container"
                    className="food-carousel-container overflow-x-auto whitespace-nowrap relative bg-white p-4 rounded-lg shadow-lg"
                >
                    {foodCarousel.map((food) => (
                        <div
                            key={food.imageId}
                            className="food-carousel-item inline-block mr-4 overflow-hidden relative"
                        >
                            <img
                                src={CDN_URL + food.imageId}
                                alt={`Food ${food.id}`}
                                className="w-full h-36 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-gray-700 text-sm mb-2">{food.name}</p>
                                <p className="text-blue-600 font-bold text-lg">
                                    {food.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Restaurants with online food delivery in Bangalore
            </h2>
            <div className="filter mb-4">
                <div className="search flex items-center space-x-4">
                    <input
                        type="text"
                        className="search-box flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Search for restaurants and food"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="search-button bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                    onClick={() => {
                        const filteredList = filteredRestaurant.filter(
                            (res) => res.info.avgRating >= 4.2
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurants/${restaurant.info.id}`}
                        className="link-like-text"
                    >
                        <div
                            className="res-card m-5 p-5 w-64 h-72 bg-white border border-gray-300
                            transition duration-300 rounded-md overflow-hidden
                            hover:border-2 hover:border-green-500 shadow-lg">
                            {restaurant.info.veg ? (<VegetarianRestaurant resData={restaurant}/>) :
                                (<RestaurantCard resData={restaurant}/>)}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
