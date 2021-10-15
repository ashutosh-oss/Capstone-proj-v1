import React from "react";
import { Route } from "react-router-dom";

//Layoout
import RestaurantLayout from "../layout/RestaurantLayout";


const RestaurantHOC = ({component: Component, ...rest}) => {
return (
    <>
    <Route {...rest} component={(props) => (
        <RestaurantLayout>
            <Component {...props}/>
        </RestaurantLayout>
       )}
       />
    </>
);
};

export default RestaurantHOC;