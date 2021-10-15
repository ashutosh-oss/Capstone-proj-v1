import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';


//componens
import RestaurantNavbar from '../Components/Navbar/Checkout.navbar';
import FoodTab from '../Components/food tab';
//reduxACTION
import {getCart} from "../Redux/Reducer/Cart/Cart.action"


const ChecoutLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCart());
    }, []);
    return (
        <>
        
        <RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20">
        {props.children}
        </div>
       
        </>
    )
}

export default ChecoutLayout;