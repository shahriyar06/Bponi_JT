import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import './../App.css'
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import AddtoCard from "../Component/AddtoCard";

const RestaurantSideNav = ({ cartItems, onOrder }) => {
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("https://bponi-jt-server.vercel.app/menu")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);

                // Extract unique categories
                const uniqueCategories = [
                    ...new Set(data.map((item) => item.category)),
                ];
                setCategories(uniqueCategories);

                // Set default active category
                if (uniqueCategories.length > 0) {
                    setActiveCategory(uniqueCategories[0].replace(/\s+/g, "-").toLowerCase());
                }
            });
    }, []);

    useEffect(() => {
        const container = document.querySelector(".scrollable-container");
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActiveCategory(id);
                    }
                });
            },
            { root: container, threshold: 0.5 } // Adjust threshold for detection accuracy
        );

        categories.forEach((category) => {
            const categoryId = category.replace(/\s+/g, "-").toLowerCase();
            const section = document.getElementById(categoryId);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [categories]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div className="lg:mb-10 mb-7">
                <Link to='/'>
                    <button className="flex font-medium items-center gap-2 bg-[#FFFFFF] hover:bg-[#fafafa] w-full py-3 px-4 rounded-2xl">
                        <FaArrowLeft className="text-lg" />All restaurant
                    </button>
                </Link>
            </div>
            <div className="mb-6 lg:hidden block">
                <button onClick={toggleModal} className="flex items-center gap-1 text-lg py-3 w-full bg-[#FCE000] px-4 rounded-xl">
                    <IoIosCart />Your cart
                    {cartItems.length > 0 && (
                        <span className="absolute top-0 right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    )}
                </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <div className="bg-white w-11/12 max-w-lg p-6 rounded-2xl shadow-lg relative">
                        <button onClick={() => setIsModalOpen(false)} className="text-red-500 text-lg">
                            ✕
                        </button>
                        {/* AddtoCard Component */}
                        <AddtoCard cartItems={cartItems} onOrder={onOrder} />
                    </div>
                </div>
            )}
            <div>
                <h1 className="text-2xl font-semibold pl-5 mb-3">Menu</h1>
                <div className="w-full">
                    <a
                        href="#new"
                        className={`text-base w-full hover:bg-[#fafafa] rounded-2xl font-medium block pl-5 py-3 pr-2 ${activeCategory === "new" ? "bg-[#FFFFFF]" : ""
                            }`}
                    >
                        What's New
                    </a>
                </div>
                <div>
                    {categories.map((category, index) => {
                        const categoryId = category.replace(/\s+/g, "-").toLowerCase();
                        return (
                            <a
                                key={index}
                                href={`#${categoryId}`}
                                className={`text-base w-full hover:bg-[#fafafa] rounded-2xl font-medium block pl-5 py-3 pr-2 ${activeCategory === categoryId ? "bg-[#FFFFFF]" : ""
                                    }`}
                            >
                                {category}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RestaurantSideNav;
