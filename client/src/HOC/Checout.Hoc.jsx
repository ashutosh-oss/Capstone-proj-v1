import React from "react";
import { Route } from "react-router-dom";

//Layoout
import ChecoutLayout from "../layout/Checout.layout";


const CheckoutHOC = ({component: Component, ...rest}) => {
return (
    <>
    <Route {...rest} component={(props) => (
        <ChecoutLayout>
            <Component {...props}/>
        </ChecoutLayout>
       )
       }
       />
    </>
);
};

export default CheckoutHOC;