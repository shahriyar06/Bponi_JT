import { IoMdStar } from "react-icons/io";
import Card from "../Component/Card";
import { IoInformationCircleOutline } from "react-icons/io5";
import RestaurantSideNav from "../Share/RestaurantSideNav";
import AddtoCard from './../Component/AddtoCard';
import { TfiGift } from "react-icons/tfi";
import { useEffect, useState } from "react";
import './../App.css'


const Restaurant = () => {

    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);
                const uniqueCategories = [...new Set(data.map((item) => item.category))];
                setCategories(uniqueCategories);
            });
    }, []);


    return (
        <div className="bg-[#F5F4F2] pt-8">
            <div className="w-10/12 mx-auto grid grid-cols-11 gap-5">
                {/* restaurant Side Navbar */}
                <div className="col-span-2">
                    <RestaurantSideNav />
                </div>
                {/* Restaurant Details */}
                <div className="col-span-6 overflow-y-auto max-h-screen no-scrollbar">
                    {/* Restaurant Banner */}
                    <div className="mb-4">
                        <div className="relative h-96 w-full rounded-3xl overflow-hidden">
                            <img
                                src="https://i.ibb.co/JBpmJ1R/1.jpg"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1A0000]/50 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0000]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-14 left-14">
                                <h1 className="text-[#FFFFFF] text-5xl font-bold">KFC Dostyk Plaza</h1>
                                <div className="flex items-center gap-3 mt-8">
                                    <div className="">
                                        <button className="flex items-center gap-2 bg-[#ffffffd3] hover:bg-[#FFFFFF] rounded-2xl px-4 py-3">
                                            <IoMdStar className="text-4xl" />
                                            <div className="leading-5 text-center text-lg">
                                                <h1>3.9</h1>
                                                <h1>200+</h1>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="bg-[#ffffffd3] hover:bg-[#FFFFFF] rounded-2xl p-3">
                                            <IoInformationCircleOutline className="text-4xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* delivery */}
                    <div className="text-[#518931] bg-[#a8e08852] py-5 px-7 rounded-3xl flex items-center gap-3 my-8">
                        <div>
                            <TfiGift className="text-4xl" />
                        </div>
                        <h1 className="text-xl">Free delivery - on any order</h1>
                    </div>
                    {/* Menu */}
                    <div className="mt-9">
                        {
                            categories.map((category) => (
                                <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")} className="mb-10">
                                    <h2 className="text-3xl font-bold mb-6">{category}</h2>
                                    <div className="grid grid-cols-3 gap-2">
                                        {
                                            menu
                                                .filter((item) => item.category === category)
                                                .map((item) => (
                                                    <Card key={item.product_name} item={item} />
                                                ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Coustomer Add to card */}
                <div className="col-span-3">
                    <AddtoCard />
                </div>
            </div>
        </div>
    );
};

export default Restaurant;