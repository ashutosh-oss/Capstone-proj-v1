import React from 'react'
//
import {FaRegCopy} from "react-icons/fa"
import {RiDirectionLine} from "react-icons/ri"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Mapview = (props) => {
    return (
        <>
          
          <div>
               <h4 className="text-xl font-medium">Call</h4>
               <h5 className="text-zomato-400 font-medium">{props.phoneNumber}</h5>
               </div>
               <div>
                   <h4 className="text-xl font-medium">Dirextion</h4>
                   <div className="w-full h-48">
                   <MapContainer 
                   center={props.mapLocation} 
                   zoom={13} 
                   scrollWheelZoom={false}
                   >
                    <TileLayer
                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                     <Marker position={props.mapLocation}>
                     <Popup>
                      {props.title}
                     </Popup>
                     </Marker>
                     </MapContainer>
                   </div>
               </div>
               <p>
                  {props.address}
                   </p>
                   <div className="flex items-center gap-3 ">
                   <button className="text-gray-600 border border-gray-600 px-3 py-2 gap-2 flex items-center rounded-full"><FaRegCopy/> Copy</button>
                   <button className="text-gray-600 border border-gray-600 px-3 py-2 gap-2 flex items-center rounded-full"> 
                   <span className="text-zomato-400">
                   <RiDirectionLine/>
                    </span>
                    Direction
                    </button>
                   </div>
        </>
    )
}

export default Mapview
