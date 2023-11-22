import React, {useEffect, useState} from "react";
import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(API_URL);
        const response = await data.json();
        const restaurantListData = response.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurantListData);
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) =>
                        (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;
