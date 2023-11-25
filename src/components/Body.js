import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {CDN_URL, OFFER_NEAR_BY_BASE_URL} from "../utils/constants";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [foodCarousel, setFoodCarousel] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [userName, setUserName] = useState("");
    const [offerCarousel, setOfferCarousel] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = (direction, containerName) => {
        const container = containerName === 'offer-carousel-container' ? document.getElementById("offer-carousel-container") :
            document.getElementById("food-carousel-container")
        const scrollAmount = containerName === 'offer-carousel-container' ? 350 : 280;

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
        console.log(response);
        const restaurantListData =
            response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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

    return (listOfRestaurants ?? []).length === 0  ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="offer-carousel">
                <h2>Best offers for you</h2>
                <div className="offer-slide-arrows">
                    <button className="scroll-button" onClick={() => handleScroll("left", "offer-carousel-container")}>
                        &larr;
                    </button>
                    <button className="scroll-button" onClick={() => handleScroll("right", "offer-carousel-container")}>
                        &rarr;
                    </button>
                </div>
                <div className="offers-carousel">
                    <div id="offer-carousel-container" className="offer-carousel-container">
                        {offerCarousel.map((offer) => (
                            <div key={offer.imageId} className="offer-carousel-item">
                                <img src={OFFER_NEAR_BY_BASE_URL + offer.imageId} alt={`Food ${offer.id}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="offer-carousel">
                <h2>{userName + ", what's on your mind?"}</h2>
                <div className="food-slide-arrows">
                    <button className="scroll-button" onClick={() => handleScroll("left", "food-carousel-container")}>
                        &larr;
                    </button>
                    <button className="scroll-button" onClick={() => handleScroll("right","food-carousel-container")}>
                        &rarr;
                    </button>
                </div>
                <div id="food-carousel-container" className="food-carousel-container">
                    {foodCarousel.map((food) => (
                        <div key={food.imageId} className="food-carousel-item">
                            <img src={CDN_URL + food.imageId} alt={`Food ${food.id}`} />
                        </div>
                    ))}
                </div>
            </div>
            <h2>Restaurants with online food delivery in Bangalore</h2>
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search Restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = filteredRestaurant.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
