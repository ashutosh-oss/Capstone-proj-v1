import React , {useState} from 'react'
import Rating from "react-stars"
import { useSelector } from 'react-redux';

//components
import ReviewModal from './ReviewModal';

const ReviewCard = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleRating = (value) => console.log(value);

    const openModal = () => {
        if(!localStorage.zomatoUser) {
            return alert("Please sign in to post a review");
        }
        setIsOpen(true);
    }
    return (
       <>
       <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
       <h3 className="text-xl font-medium">Rate your Experience Here</h3>
           <div className="flex items-center gap-3">
           <div className="flex items-center gap-2">
               
               <input type="radio" name="review" id="dining"/>
               <label htmlFor="dining">Dining</label>
           </div>
           <div className="flex items-center gap-2">
              
               <input type="radio" name="review" id="delivery"/>
                <label htmlFor="delivery">Delivery</label>
           </div>
           </div>
           <div>
               <Rating count={5} onChange={handleRating} size={24}/>
           </div>
           <button onClick={openModal} className="text-zomato-400">Write a Review</button>
       </>
    )
}

export default ReviewCard;
