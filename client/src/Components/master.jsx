import React from 'react'
import {useParams} from "react-router-dom"

//components
import Delivery from './Delivery';
import Dining from './Dining';
import NightLife from './Night Life';
import Nutrition from './Nutrition';

const Master = () => {
    const {type} = useParams();
    return (
        <>
        <div className="my-5">
            {type === "delivery" && <Delivery/>}
            {type === "diningout" && <Dining/>}
            {type === "nightlife" && <NightLife/>}
            {type === "nutrition" && <Nutrition/>}
            </div>
        </>
    )
};

export default Master;
