import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"


//  component
import ReviewCard from '../Components/restaurant/reviews/ReviewCard';
import AddReviewCard from '../Components/restaurant/reviews/AddReviewCard';
import { getReviews } from '../Redux/Reducer/Reviews/Reviews.action';



const Reviews = () => {
    const[reviews, setReviews] = useState([]);
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant?.selectedRestaurant?.restaurant
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if(reduxState){
            dispatch(getReviews(reduxState?._id)).then((data) => 
                setReviews(data.payload.reviews)
            );
        }
    }, [])

    const handleRating = (value) => console.log(value);
    return (
        <>
            <div className="w-full flex flex-col md:flex-row relative">
                <div className="w-full h-8/12 flex flex-col gap-3">
                    <div className="md:hidden">
                        <ReviewCard />
                    </div>
                    {reviews.map((review) => (
                        <AddReviewCard {...review} />
                    ))}
                </div>  
                <aside 
                    style={{ height: "fit-content" }}
                    className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-3">
                        <ReviewCard />
                </aside>
            </div>
        </>
    )
}

export default Reviews