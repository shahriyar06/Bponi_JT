import { IoIosSend } from "react-icons/io";
import logo from "../../public/Logo.png"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`bg-[#F5F4F2] fixed top-0 left-0 w-full z-50 ${isScrolled ? "shadow-xl" : "border-b border-[#cecece]"
            }`} >
            {/* Laptop */}
            <div className="h-20 flex py-4 px-3 items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* logo */}
                    <div>
                        <img src={logo} alt="Website Logo" className="h-16" />
                    </div>
                    {/* search */}
                    <div className="">
                        <input type="text" placeholder="Search in the restaurant" className="h-12 w-80 rounded-2xl border focus:outline-none text-lg border-[#cecece] pl-9 pr-2 text-[#9E9B98]" />
                        <h1 className="absolute">
                            <HiOutlineMagnifyingGlass className="relative bottom-9 text-2xl left-2 text-[#9E9B98]" />
                        </h1>
                    </div>
                    {/* button */}
                    <div>
                        <button className="flex gap-1 items-center h-12 rounded-2xl border focus:outline-none text-lg border-[#cecece] font-medium py-2 px-5 bg-[#FCE000]" ><IoIosSend className="text-xl" />Enter delivery address</button>
                    </div>
                </div>
                <div className="pr-7 flex items-center gap-6">
                    {/* language */}
                    <div className="flex flex-col items-center">
                        <FiGlobe className="text-2xl" />
                        <h1 className="text-sm">English</h1>
                    </div>
                    {/* login */}
                    <div className="">
                        <Link><button className="px-7 py-3 bg-[#E0DEDA] font-semibold text-base rounded-2xl">Log In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;