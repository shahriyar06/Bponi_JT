import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="my-20 pt-24">
            <div className="text-center">
                <h1 className="text-3xl font-bold">We don't deliver here yet :(</h1>
                <p className="text-xl my-5 text-[#9E9B98] w-5/12 mx-auto">But we add dozens of new places every week. Maybe we'll be here soon! If you enter your email, we'll tell you as soon as we're available. We promise not to spam!</p>
                <div>
                    <button className="rounded-xl font-semibold focus:outline-none text-lg px-4 py-2 bg-[#FCE000]" >Notify me</button>
                </div>
                <div className="mt-3">
                    <Link to="restaurant">
                        <button className="rounded-xl font-semibold focus:outline-none text-lg px-4 py-2 bg-[#FCE000]" >KFC Dostyk Plaza</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;