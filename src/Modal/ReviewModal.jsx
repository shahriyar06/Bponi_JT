import { useEffect, useState } from "react";

const ReviewModal = ({ onClose }) => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        fetch("https://bponi-jt-server.vercel.app/review") // Adjust the path to where review.json is served
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    setReviews(data);
                    const avg =
                        data.reduce((acc, review) => acc + review.ratings, 0) /
                        data.length;
                    setAverageRating(avg.toFixed(2));
                } else {
                    setReviews([]);
                    setAverageRating(0);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setReviews([]);
                setAverageRating(0);
            });
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Rating</h1>
                    <button onClick={onClose} className="text-red-500 text-lg">
                        ✕
                    </button>
                </div>
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold">{averageRating}</h2>
                    <p>{reviews.length} reviews</p>
                </div>
                <div className="overflow-y-auto max-h-60 no-scrollbar">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="border-b py-2">
                                <h3 className="font-semibold text-xl">{review.user_name}</h3>
                                <p>{review.postdate}</p>
                                <p>{review.comment}</p>
                                <p className="text-yellow-500">{"★".repeat(review.ratings)}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No reviews available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
