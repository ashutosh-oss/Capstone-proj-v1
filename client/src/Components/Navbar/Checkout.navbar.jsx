import React from 'react'
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai"
import gravatar from "gravatar";
import { useSelector } from "react-redux";

const RestaurantNavbar = () => {
    const reduxState = useSelector((global) => global.user?.user);

    return (
        <>
        <nav className="p-4 flex bg-white shadow-md lg:shadow-none -px-4 items-center">
       <div className="container mx-auto px-4 lg:px-20">
       <div className="flex w-full items-center justify-between">
           <AiOutlineArrowLeft/>
           <div className="w-28">
                <img src={gravatar.url(reduxState?.user?.email)}
                alt={reduxState?.user?.email}
                className="w-full h-full"/>
            </div>
            <div className="flex items-center gap-3">
                
                <span className="border flex items-center gap-2 p-2 border-gray-300 text-zomato-400 rounded-full">
                <FaUserAlt/>
                </span>
               {reduxState?.user?.fullname}
            </div>
        </div>
       </div>
        
        </nav>
        </>
    )
}

export default RestaurantNavbar;
