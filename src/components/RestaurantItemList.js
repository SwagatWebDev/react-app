import {CDN_URL} from "../utils/constants";

const RestaurantItemList = ({items}) => {

    return (
        <div>
            {
                items.map((item) => (
                        <div key={item.card.info.id}
                             className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span>{item.card.info.name}</span>
                                    <span>
                                    - ₹
                                        {
                                            item.card.info.price ?
                                                item.card.info.price / 100
                                                : item.card.info.defaultPrice / 100
                                        }
                                </span>
                                </div>
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12 p-4">
                                <button
                                    className="absolute p-2 mx-1.5 rounded-sm my-28 bg-gray-50 text-white shadow-lg w-28">
                                    <span className="mr-2 text-green-500">ADD</span>
                                    <span className="absolute bottom-6 right-0 text-green-500">+</span>
                                </button>
                                <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default RestaurantItemList;
