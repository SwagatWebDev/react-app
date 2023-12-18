import React from "react";
import {groceryItems} from "../utils/constants";
import GroceryItem from "./GroceryItem";

const Grocery = () => {

    return (
        <div className="grocery-page p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-600">
                Fresh Fruits to order
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {groceryItems.map((item, index) => (
                    <GroceryItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Grocery;
