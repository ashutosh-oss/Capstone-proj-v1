//Libraries
import express from "express";
import passport from "passport";


//Models
import { RestaurantsModel } from "../../database/allModels";
//validation
import { ValidateParticularRes } from '../../Validation/restaurant'

const Router = express.Router();

/*
Route   /
des     Get all restaurants based on the city
Params   none
Access   public
Method   GET
*/
Router.get("/", async (req, res) => {
  try {
    const city = req.query.city;
    const allRestaurants = await RestaurantsModel.find({
      city: city || "Bangalore",
    });
    return res.json({ restaurants: allRestaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/*
Route   /
des     Get RESTAURANT based on id
Params   none
Access   public
Method   GET
*/
Router.get("/:_id", async (req,res) => {
      try {
          await ValidateParticularRes(req.params);
          const {_id} = req.params;
          const restaurant = await RestaurantsModel.findById(_id);

          if(!restaurant) {
              return res.status(404).json({error: "Restaurant Not Found"});
          }
          return res.json({restaurant});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
});
/*
Route   /
des     Get all restaurants based on search string
Params   none
Body      searchString
Access   public
Method   GET
*/
Router.get("/search", async(req,res) => {
    try {
        await ValidateParticularResString(req.body);
        const { searchString} = req.body;
        const restaurants = await RestaurantsModel.find({
            name: { $regex: searchString, $options: "i"},
        });
        if(!restaurants) {
            return res.status(404).json({error: ` ${searchString} restaurant Not Found`});
        }
        return res.json({restaurants});
    } catch (error) {
        return res.json({error: error.message});
    }
})

// @Route   POST /restaurants/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newRestaurant = await RestaurantsModel.create(req.body.restaurantData);
      return res.json({ restaurants: newRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   PATCH /restaurants/update
  // @des     update exisitng restaurant data
  // @access  PRIVATE
  Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
      const updatedRestaurant = await RestaurantsModel.findByIdAndUpdate(
        req.body.retaurantData._id,
        { $set: req.body.restaurantData },
        { new: true }
      );
      if (!updatedRestaurant)
        return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });
  
      return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE /restaurants/delete
  // @des     update exisitng restaurant data
  // @access  PRIVATE
  Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
      const deleteRestaurant = await RestaurantsModel.findByIdAndRemove(
        req.body.retaurantData._id
      );
      return res.json({ restaurants: Boolean(deleteRestaurant) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
 export default Router;