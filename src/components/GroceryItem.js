const GroceryItem = ({ name, price, imageSrc }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={imageSrc} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">₹{price} per kg</p>
            </div>
            <div className="flex items-center justify-center px-6 pt-4 pb-2">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-center">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default GroceryItem;
