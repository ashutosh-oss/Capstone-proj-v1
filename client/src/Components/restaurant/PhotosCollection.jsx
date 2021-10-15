import React from 'react'



const PhotosCollection = (props) => {
    
    return (
        <>
        
        <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col"
         onClick={props.openViewer}>
            <div className="w-full h-full overflow-hidden rounded-lg">
                <img 
                src={props.image[0]} 
                alt="menu image" 
                className="w-full h-full transform transition duration-700  ease-in-out hover:scale-110"/>
            </div>
        </div>
        </>
    )
}

export default PhotosCollection;
