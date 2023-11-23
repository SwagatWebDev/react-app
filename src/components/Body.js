import {useEffect, useState} from "react";
import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("Body Rendered");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(API_URL);
        const response = await data.json();
        console.log(response);
        const restaurantListData = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurantListData);
        setFilteredRestaurant(restaurantListData);
    }
    // Conditional Rendering
    /*if (listOfRestaurants.length === 0){
        return (<Shimmer/>)
    }*/
    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search Restaurants..."
                           value={searchText}
                           onChange={(e) => {
                               setSearchText(e.target.value);
                           }}
                    />
                    <button type="search-button" onClick={() => {
                        console.log(searchText);
                        console.log(listOfRestaurants);
                        const filteredRestaurants = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        // setListOfRestaurants(filteredRestaurants);
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    // const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    // setListOfRestaurants(filteredList);
                    const filteredList = filteredRestaurant.filter((res) => res.info.avgRating >= 4);
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) =>
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
