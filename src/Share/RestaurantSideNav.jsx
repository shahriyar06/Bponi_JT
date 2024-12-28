import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";


const RestaurantSideNav = () => {

    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);

                // Extract unique categories
                const uniqueCategories = [
                    ...new Set(data.map((item) => item.category)),
                ];
                setCategories(uniqueCategories);
            });
    }, []);

    return (
        <div>
            <div className="mb-10">
                <button className="flex font-medium items-center gap-2 bg-[#FFFFFF] hover:bg-[#fafafa] w-full py-3 px-4 rounded-2xl"><FaArrowLeft className="text-lg" />All restaurant</button>
            </div>
            <div>
                <h1 className="text-xl font-semibold pl-5 mb-3">Menu</h1>
                <div className="w-full">
                    <a href="#new" className="text-base w-full hover:bg-[#fafafa] rounded-2xl font-medium block pl-5 py-3 pr-2">What's New</a>
                </div>
                <div>
                    {
                        categories.map((category, index) => (
                            <a key={index}
                                href={`#${category.replace(/\s+/g, "-").toLowerCase()}`}
                                className="text-base w-full hover:bg-[#fafafa] rounded-2xl font-medium block pl-5 py-3 pr-2"
                            >
                                {category}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default RestaurantSideNav;