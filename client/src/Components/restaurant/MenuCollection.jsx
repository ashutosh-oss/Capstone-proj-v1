import React, {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';


const MenuCollection = (props) => {
    const [isMenuOpen,setMenuOpen] = useState(false);
    const [currentImage,setCurrentImage] = useState(0);
    const closeViewer = () => setMenuOpen(false);
    const openViewer = () => setMenuOpen(true);
    return (
        <>
        {isMenuOpen && (
            <ImageViewer
            src={props.image}
            currentIndex={currentImage}
            disableScroll={false}
            onClose={closeViewer}
          />
        )}
        <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col" onClick={openViewer}>
            <div className="w-full h-full overflow-hidden rounded-lg">
                <img 
                src={props.image[0]} 
                alt="menu image" 
                className="w-full h-full transform transition duration-700  ease-in-out hover:scale-110"/>
            </div>
            <div>
            <strong>{props.menuTitle}</strong>
            <p>{props.pages}</p>
            </div>
        </div>
        </>
    )
}

export default MenuCollection;
