import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";


const Card = ({ item }) => {
    return (
        <div className="bg-[#FFFFFF] w-full rounded-3xl flex flex-col">
            <div className="p-4 pt-6">
                <img src={item.image} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="px-4 mb-9 flex-grow">
                <h1 className="text-2xl font-semibold">{item.amount} {item.price} $</h1>
                <h1 className="text-lg leading-5">{item.product_name}</h1>
                <h1 className="text-lg text-[#9E9B98]">{item.PC}</h1>
            </div>
            <div className="px-4 pb-3">
                {
                    item.available === "Available" ?
                        <Link><button className="py-3 w-full bg-[#E7E5E1] text-lg rounded-xl flex items-center gap-2 justify-center"><GoPlus className="text-2xl" />Add</button></Link>
                        :
                        <button className="py-3 w-full bg-[#E7E5E1] text-lg rounded-xl flex items-center gap-2 justify-center mt-2">Available soon</button>
                }
            </div>
        </div>
    );
};

export default Card;