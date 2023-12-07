import {RES_MENU_API_URL} from "./constants";
import {useEffect, useState} from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API_URL+ resId);
        const response = await data.json();
        setResInfo(response.data);
    }
    return resInfo;
}

export default useRestaurantMenu;
