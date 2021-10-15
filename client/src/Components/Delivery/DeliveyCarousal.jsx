import React from 'react'
import Slider from "react-slick";
//COMPONENTS
import DeliveryCategory from './DeliveryCategory';
import { NextArrow,PrevArrow } from '../CarousalArrows';

const DeliveyCarousal = () => {
    const categories = [{
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        title: "Biriyani",
    },
    {
       image: "https://b.zmtcdn.com/data/pictures/chains/0/18260780/a0f1e5364c8b52b02bf0df7df7022539_featured_v2.jpg",
       title: "Benne Dosa",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/2/19107622/5794d9e96f11ad3144ab8cd795b3b290_featured_v2.jpg",
        title: "La  Alta Vita",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/2/18453992/434b8d2addbc8c389958f67def516c2e_featured_v2.jpg",
        title: "Sea Food",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/8/18590338/017be29970cc02a6a50a06d9a369566c_featured_v2.jpg",
        title: "Toasties",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/4/19351014/05fba2ac02b3737335d0dffff265eb5b_featured_v2.jpg",
        title: "Pizzas",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/3/18308793/dda0a8d19448adf672c0905f68c1afb2_featured_v2.jpg",
        title: "Curry Roti",
    },
];
const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };
    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">Inspiration for yur first order </h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {categories.map((food) => (<DeliveryCategory{...food}/>))}
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                   {categories.map((food) => (
                       <DeliveryCategory {...food}/>
                   ))}
                </Slider>
            </div>
        </>
    );
};

export default DeliveyCarousal;
