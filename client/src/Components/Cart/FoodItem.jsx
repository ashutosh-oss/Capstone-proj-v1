import React from 'react'
import {BsTrashFill} from "react-icons/bs"
import { useDispatch } from 'react-redux'

import { DeleteCart,IncQty,DecQty } from '../../Redux/Reducer/Cart/Cart.action'

const FoodItem = (props) => {
    const dispatch = useDispatch();
    const deleteFoodFromCart = () => dispatch(DeleteCart(props._id));

    const increment = () => dispatch(IncQty(props._id));
    const decrement = () => {
        if(props.quantity === 1) return;

        dispatch (DecQty(props._id));
    }
    return (
       <>
       <div className="flex items-center justify-between">
       <div className="flex items-center justify-between">
           <h5 className="font-semibold ">{props.title}</h5>
           <div className="flex items-center gap-2">
           </div>
           <div className="flex flex-col gap-1 items-end">
               <h6>{parseInt(props.price) * parseInt(props.quantity)}/-</h6>
           <div className="flex items-center bg-zomato-400 px-2 gap-2 rounded-lg">
               <button 
               onClick={decrement}
               className="text-white bg-zomato-400 p-1 rounded-lg">-</button>
               <small className="text-white">{props.quantity}</small>
               <button 
               onClick={increment}
               className="text-white bg-zomato-400 p-1 rounded-lg ">+</button>
           </div>
           </div>
           <BsTrashFill
           onClick={deleteFoodFromCart}
           className="text-zomato-400 text-lg md:text-xl"
           />
           </div>
       </div>
       <hr className="my-1"/>
       </>
    )
}

export default FoodItem
