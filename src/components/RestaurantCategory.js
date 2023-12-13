import RestaurantItemList from "./RestaurantItemList";
import {useState} from "react";

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }
    return (
        <div>
            {/*Accordion Header*/}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={handleClick}>
                    <span className="font-bold text-md">{data.title}({data.itemCards.length})</span>
                    {showItems ? <span>&#9650;</span> : <span>&#9660;</span>}
                </div>
                {/*Accordion Body*/}
                {showItems && <RestaurantItemList items={data.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;
