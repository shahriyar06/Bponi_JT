import { IoMdStar } from "react-icons/io";
import Card from "../Component/Card";
import { IoInformationCircleOutline } from "react-icons/io5";


const Restaurant = () => {
    return (
        <div className="bg-[#F5F4F2]">
            <h1>This is restaurant page.</h1>
            <div className="w-10/12 mx-auto grid grid-cols-11 gap-5">
                <div className="col-span-2"></div>
                <div className="col-span-6">
                    {/* Restaurant Banner */}
                    {/* <div className="my-4">
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
                    </div> */}
                    <div className="mt-9">
                        <Card></Card>
                    </div>
                </div>
                <div className="col-span-3"></div>
            </div>
        </div>
    );
};

export default Restaurant;