import { FaWalking } from "react-icons/fa";

const AddtoCard = () => {
    return (
        <div 
            className="bg-[#f9f9f9] p-6 rounded-2xl flex flex-col h-full w-full relative" style={{ zIndex: 1 }}
        >
            {/* Cart Header */}
            <h2 className="text-xl font-bold text-black mb-4">Cart</h2>

            <div className="flex-grow">
                {/* Empty Cart Message */}
                <div className="flex flex-col items-center justify-center mt-10">
                    {/* Empty Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 16a4 4 0 008 0m-4-4V4m-6 4H4a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 00-1-1h-2m-6 4v2"
                            />
                        </svg>
                    </div>

                    {/* Empty Message */}
                    <p className="text-2xl text-center font-semibold text-[#000000]">
                        Your cart is currently empty
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10">
                <hr className="border-gray-200 mb-4" />
                <div className="flex items-center space-x-3">
                    {/* React Icon */}
                    <div className="p-2 bg-gray-100 rounded-full">
                        <FaWalking className="text-yellow-500 text-lg" />
                    </div>
                    <p className="text-red-500 text-sm font-medium">
                        Out of delivery zone
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddtoCard;
