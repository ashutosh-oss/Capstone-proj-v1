import React from 'react'
import {MdAddAPhoto} from "react-icons/md"

const ImagesGrid = (props) => {
    return (
        <>
        <div className="w-full h-60 md:hidden">
               <img src={props.image[0]} 
               alt="Restaurant" 
               className="w-full h-full object-cover rounded-lg"
               />
           </div>
           <div className="hidden w-full h-80 md:flex gap-1">
           <div className="w-full h-full overflow-hidden">
           <img src={props.image[1]} 
               alt="Restaurant" 
               className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
               />
           </div>
           <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
           <img src={props.image[2]} 
               alt="Restaurant" 
               className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
               />
               <img src={props.image[3]}
               alt="Restaurant" 
               className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
               />  
           </div>
           <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
           <div className=" w-full h-full relative">
           <img src={props.image[4]}
               alt="Restaurant" 
               className="w-full h-full object-cover rounded-lg"
               />
               <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg"/>
               <h4 className="absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold">View Gallery</h4>
           </div>
               <div className="w-full h-full relative">
               <img src={props.image[5]}
               alt="Restaurant" 
               className="w-full h-full object-cover rounded-lg"
               />   
                <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg"/>
                <div className="flex flex-col items-center absolute inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
                <div className="bg-black p-3 rounded-full bg-opacity-50"><MdAddAPhoto/></div>
                <h4>View Gallery</h4>  
                </div>
               </div> 
           </div>
           </div>
        </>
    )
}

export default ImagesGrid
