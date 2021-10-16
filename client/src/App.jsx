import { Route,Redirect,Switch } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

//import HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import CheckoutHOC from "./HOC/Checout.Hoc";

//component
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import CheckoutPage from "./Page/Checkout.page";
import RedirectRestaurant from "./Page/Restaurant/Redirect";
import GoogleAuth from "./Page/GoogleAuth";
//  redux action
import { getMyself } from "./Redux/Reducer/User/User.action";

// axios global seetings
if(localStorage.zomatoUser) {
  const {token} = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.zomatoUser) dispatch(getMyself());
  }, []);

  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery"/>
    </Route>
    <Route path="/restaurant/:id" exact>
      <Redirect exact component={RedirectRestaurant}/>
    </Route>
    <HomeLayoutHOC path="/:type" exact component={Home}/>
    <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview}/>
    <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
    <RestaurantHOC path="/restaurant/:id/order-online" exact component={OrderOnline}/>
    <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu}/>
    <RestaurantHOC path="/restaurant/:id/reviews" exact component={Reviews}/>
    <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos}/>
    <CheckoutHOC path="/checkout/orders" exact component={CheckoutPage}/>
    </>
  );
};

export default App;
