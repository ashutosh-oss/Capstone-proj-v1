import React from 'react';
import ReactStars from 'react-stars';
import {BsStar,BsStarHalf,BsStarFill} from "react-icons/bs";

const NutritionCard = (props) => {
    return (
        <>
        <div className="w-full p-4  md:w-1/2 lg:w-1/3 ">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg">
          <div className={`w-full h-56 p-4 rounded-t-2xl bg-${props.bg}-100`}>
              <img 
              src={props.image}
              alt="supplements"
              className="w-full h-full"
              />
          </div>
          <div className="px-3 py-3 flex flex-col gap-3">
          <div className="flex mt-2 items-center gap-3">
          <div className="w-4 h-4">
              <img
              src="data:image/png;base64,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"
              alt="veg icon"
              className="w-full h-full"
              />
          </div>
          <ReactStars
          count={5}
         // onChange={ratingChanged}
          size={24}
          value={3}
          isHalf={true}
          emptyIcon={<BsStar/>}
          halfIcon={<BsStarHalf/>}
          fullIcon={<BsStarFill/>}
          activeColor="#ffd700"
          />
          <span className="text-gray-400">15</span>
        </div>
        <h3 className="text-xi font-bold text-gray-700">Burn -- Weight Balance</h3>
        <p className="text-sm font-light text-gray-400">This formula with VFill technology will help improve the muscle strenght and support fat burn.</p>
       <div className="mt-4">
           <hr/>
       </div>
       <div>
           <span>
           <s className="text-gray-300 font-light mr-3 ">₹600</s>
           <strong>₹350</strong>
           <p>Monthly pack 30 capsules</p>
           </span>
       </div>
        </div>
          </div>
          </div>
        </>
    )
}

export default NutritionCard;
