import { FaApple, FaGooglePlay, FaRegCopyright } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-[#F5F4F2]">
            <div className="w-10/12 mx-auto">
                {/* 1st part */}
                <div className="py-20">
                    <h1 className="text-2xl font-semibold">Even easier in the app</h1>
                    <div className="mt-7 flex items-center gap-4">
                        <button className="text-[#5C5A57] border border-[#8A8784] text-sm rounded-xl flex items-center gap-2 py-2 px-3"><FaApple className="text-2xl" />App Store</button>
                        <button className="text-[#5C5A57] border border-[#8A8784] text-sm rounded-xl flex items-center gap-2 py-2 px-3 uppercase"><FaGooglePlay className="text-2xl" />Play Store</button>
                    </div>
                </div>
                <hr />
                {/* Middle Part */}
                <div className="py-20 w-7/12 ml-auto">
                    <h1 className="text-2xl font-semibold">Company information</h1>
                    <div className="my-5 flex items-center gap-4 text-sm text-[#9E9B98]">
                        <Link><h1>User agreement</h1></Link>
                        <Link><h1>Contacts</h1></Link>
                        <Link><h1>Delivery</h1></Link>
                        <Link><h1>FAQ</h1></Link>
                        <Link><h1>Become a partner</h1></Link>
                        <Link><h1>Become a courier</h1></Link>
                        <Link><h1>Eats for business</h1></Link>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-sm text-[#9E9B98]">
                        <Link><h1>Plastic recycling</h1></Link>
                        <Link><h1>Order food in the Yandex Go App</h1></Link>
                        <Link><h1 className="flex items-center gap-1"><TfiEmail className="text-xl font-semibold"/>Feedback</h1></Link>
                    </div>
                </div>
                <hr />
                {/* Last part */}
                <div className="py-8 flex items-center justify-between">
                    <div className="text-[#9E9B98] text-sm flex items-center gap-1">
                        <FaRegCopyright />
                        <h1>2018-2024 Yandex Eats LLC</h1>
                    </div>
                    <div>
                        <h1 className="text-[#9E9B98] text-sm">Project for Yandex</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;