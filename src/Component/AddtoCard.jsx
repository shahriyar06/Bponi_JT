import { FaWalking } from "react-icons/fa";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";

const AddtoCard = ({ cartItems, onOrder }) => {
    return (
        <div
            className="bg-[#f9f9f9] p-6 rounded-2xl flex flex-col h-full w-full relative"
            style={{ zIndex: 1 }}
        >
            {/* Cart Header */}
            <h2 className="text-xl font-bold text-black mb-4">Cart</h2>

            <div className="flex-grow">
                {cartItems.length > 0 ? (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between py-2 border-b">
                                <span>{item.product_name}</span>
                                <span>{item.price} $</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="flex flex-col items-center justify-center mt-10">
                        <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <GiEmptyMetalBucketHandle className="text-8xl"/>
                        </div>
                        <p className="text-2xl text-center font-semibold text-[#000000]">
                            Your cart is currently empty
                        </p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div>
                {cartItems.length > 0 && (
                    <div className="mt-10">
                        <hr className="border-gray-200 mb-4" />
                        <button
                            onClick={onOrder}
                            className="py-3 w-full bg-[#FCE000] text-lg rounded-xl"
                        >
                            Order
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-10">
                <hr className="border-gray-200 mb-4" />
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                        <FaWalking className="text-yellow-500 text-lg" />
                    </div>
                    <p className="text-red-500 text-sm font-medium">
                        Give your delivery location
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddtoCard;