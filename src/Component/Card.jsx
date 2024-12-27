import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";


const Card = () => {
    return (
        <div className="bg-[#FFFFFF] w-2/6 rounded-3xl">
            <div className="p-4 pt-6">
                <img src="https://i.ibb.co.com/27Nn5gD/2.jpg" alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="px-4 mb-9">
                <h1 className="text-2xl font-semibold">3 300 $</h1>
                <h1 className="text-lg leading-5">Basket S: Wings and Legs</h1>
            </div>
            <div className="px-4 pb-3">
                <Link><button className="py-3 w-full bg-[#E7E5E1] text-lg rounded-xl flex items-center gap-2 justify-center"><GoPlus className="text-2xl"/>Add</button></Link>
                <Link><button className="py-3 w-full bg-[#E7E5E1] text-lg rounded-xl flex items-center gap-2 justify-center mt-2">Available soon</button></Link>
            </div>
        </div>
    );
};

export default Card;