import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import './../App.css'
import { Link } from "react-router-dom";

const RestaurantSideNav = () => {
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

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

    return (
        <div>
            <div className="mb-10">
                <Link to='/'>
                    <button className="flex font-medium items-center gap-2 bg-[#FFFFFF] hover:bg-[#fafafa] w-full py-3 px-4 rounded-2xl">
                        <FaArrowLeft className="text-lg" />All restaurant
                    </button>
                </Link>
            </div>
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
