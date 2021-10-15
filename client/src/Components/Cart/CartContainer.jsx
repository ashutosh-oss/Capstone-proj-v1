import React, {useState} from 'react';
import {IoMdArrowDropup,IoMdArrowDropright} from "react-icons/io"
import {GrFormClose} from "react-icons/gr"
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

//components
import FoodItem from './FoodItem';

//redux action
import { getCart } from '../../Redux/Reducer/Cart/Cart.action';

const CartSm = ({toggle}) => {
    const reduxState = useSelector((global) => global.cart?.cart);
  const history = useHistory();

  const continueToCheckout = () => history.push("/checkout/orders");

    return (
        <>
        <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col gap-1 items-start">
               <small className="flex items-center gap-1"  onClick={toggle}>
                   {reduxState.length} <IoMdArrowDropup/>
               </small>
               <h4>₹{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}
                   <sub>
                       (plus taxes)
                   </sub>
                </h4>
           </div>
           <button className="bg-zomato-400 px-3 py-1 gap-1 text-white flex items-center rounded-lg">
               Continue  <IoMdArrowDropright/>
            </button>
        </div>
        </>
    )
}

const CartMd = ({toggle }) => {
    const reduxState = useSelector((global) => global.cart?.cart);
    const history = useHistory();

    const continueToCheckout = () => history.push("/checkout/orders");
    return (
        <>
        <div className="hidden md:flex items-center justify-between container px-20 mx-auto">
        <div className="flex items-center gap-3 items-start">
            <span 
            onClick={toggle}
            className="border border-gray-400 rounded-sm text-2xl"  onClick={toggle}>
                <IoMdArrowDropup />
            </span>
               <small className="text-xl">
                  Your Order ({reduxState.length})
               </small>
           </div>
           <div className="flex items-center text-xl gap-2">
               <h4>Subtotal:₹
               {reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}
               </h4>
           <button 
           onClick={continueToCheckout}
           className="bg-zomato-400 px-5 py-1 gap-1 text-white flex items-center rounded-md">
               Continue <IoMdArrowDropright />
            </button>
           </div>
        </div>
        </>
    )
}
const CartContainer = () => {
    const [isOpen,  setIsOpen] = useState(false);
    const [cartData, setCartData] = useState([]);

    const dispatch = useDispatch();
    const reduxState = useSelector((global) => global.cart?.cart);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
        {reduxState.length && (
       <>
      {isOpen && (
           <div className="fixed w-full h-48  overflow-y-scroll bg-white z-10 p-2 bottom-14 px-3">
           <div className="flex items-center justify-between">
               <h4 className="text-xl font-semibold">Your Orders</h4>
               <GrFormClose onClick={closeCart}/>
           </div>
           <hr className="my-2"/>
           <div className="flex flex-col  gap-2 justify-between">
           {reduxState.map((food) => (
                  <FoodItem key={food._id} {...food}/>
                ))}
           </div>
           </div>
      )}
       <div className="fixed w-full bg-white z-10 p-2 bottom-0">
           <CartSm toggle={toggleCart}/>
           <CartMd toggle={toggleCart}/>
       </div>    
       </>
    )}
    </>
    );
};

export default CartContainer
