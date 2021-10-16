import React, {useState,useEffect} from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link,useParams } from 'react-router-dom'
import Slider from "react-slick"
import ReactStars from 'react-stars'
import { useSelector, useDispatch } from "react-redux"


//COMPONENTS
import MenuCollection from '../../Components/restaurant/MenuCollection'
import { NextArrow,PrevArrow } from '../../Components/CarousalArrows'
import MenuSimilarRestaurantcard from '../../Components/restaurant/MenuSimilarCard'
import AddReviewCard from '../../Components/restaurant/reviews/AddReviewCard'
import Mapview from '../../Components/restaurant/Mapview'

import { getImage } from '../../Redux/Reducer/Images/Images.action'
import { getReviews } from '../../Redux/Reducer/Reviews/Reviews.action'

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] })
    const [reviews, setReviews] = useState([]);

    const {id} = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };

      const reduxState = useSelector(
        (globalStore) => globalStore.restaurant?.selectedRestaurant?.restaurant
    );

    const dispatch = useDispatch();
    console.log({reduxState});

    useEffect(() => {
        if(reduxState){
            dispatch(getImage(reduxState?.menuImage)).then((data) => { 
                const images = [];
                data.payload.image?.images?.map(({location}) => images?.push(location));
                setMenuImages(images);
            });
            dispatch(getReviews(reduxState?._id)).then((data) => 
                setReviews(data.payload.reviews)
            );
        }
    }, []);


      const ratingChanged = (newRating) => {
        console.log(newRating);
      };

      const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    };
    
    return (
        <>
        <div className="flex flex-col md:flex-row relative">
           <div className="w-full md:w-8/12">
            <h2 className="font-semibold text-lg md:text-xl my-4">
                About This place
            </h2>
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium">Menu</h4>
                <Link to={`/restaurant/${id}/menu`}>
                <span className="flex items-center gap-1 text-zomato-400">
                    See all menu <IoMdArrowDropright/>
                </span>
                </Link>
                </div>
            <div className="flex flex-wrap gap-3">
                <MenuCollection 
                image={menuImage}
                menuTitle="Menu" 
                pages="4"/>
            </div >
            <div >
            <h4 className="text-lg font-medium my-2">Cuisine</h4>
            <div className="flex flex-wrap items-center gap-4">
              {reduxState?.cuisine.map((data) => (
                    <span className=" border border-gray-600 text-blue-600 px-1 py-2 rounded-full">
                    {data}
                </span>
              ))}
                
            </div>
            <div className="my-4">
                        <h4 className="text-2xl font-normal">Average Cost</h4>
                        <h6>₹{reduxState?.averageCost} for one order (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
            <div className="my-4 ">
            <h4 className="text-lg font-medium my-2">Similar Restaurants</h4>
            <Slider {...settings}>
                <MenuSimilarRestaurantcard 
                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                title="tea"
                />
                <MenuSimilarRestaurantcard 
                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                title="tea"
                />
                <MenuSimilarRestaurantcard 
                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                title="tea"
                />
                <MenuSimilarRestaurantcard 
                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                title="tea"
                />
               
            </Slider>
            </div>
            </div>
            <div>
                <h4 className="text-bold text-gray-800 text-xl">Rate your food experience</h4>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={36}
                color2={'#ffd700'}/>
                {reviews.map((reviewData) => (
                    <AddReviewCard {...reviewData}/>
                ))}
            </div>

            <div className="my-4 md:hidden w-full flex flex-col gap-4">
            <Mapview 
               title={reduxState?.name}
               mapLocation={getLatLong(reduxState?.mapLocation)} 
               phoneNumber={`+91${reduxState?.contactNumber}`} 
               address={reduxState?.address}/>
            </div>
            <div className="flex flex-col gap-1">
                <AddReviewCard/>
                <AddReviewCard/>
                <AddReviewCard/>
            </div>
           </div>
           <aside style={{height: "fit-content"}} 
           className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
               <Mapview 
               title={reduxState?.name}
               mapLocation={getLatLong(reduxState?.mapLocation)} 
               phoneNumber={`+91${reduxState?.contactNumber}`} 
               address={reduxState?.address}/>
           </aside>
        </div>
        </>
    )
}

export default Overview
