//importing the required libraries
import express from "express";
import passport from "passport";

//importing foodmodel
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

Router.get("/:type/:reviewID", async (req, res) => {
    try {
      const { type, reviewID } = req.params;
      const getReviews = await ReviewModel.find({ [type]: reviewID });
      if (!getReviews) return res.json({ review: [] });
  
      return res.json({ review: getReviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  Router.get("/:type/:reviewID/:userID", async (req, res) => {
    try {
      const { type, reviewID, userID } = req.params;
      const getReviews = await ReviewModel.find({
        [type]: reviewID,
        user: userID,
      });
      if (!getReviews) return res.json({ review: [] });
  
      return res.json({ review: getReviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
/*
Route   /new
des     Add new reviews / ratings
Params   NONE
Body     reviewData
Access   public
Method   POST
*/
Router.post("/new", async(req,res) => {
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);

        return res.json({review: "Succcessfully review created"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});
/*
Route   /delete
des     DELETE new reviews / ratings
Params   ID
Body     NONE
Access   public
Method   DELETE
*/
Router.delete("/delete", async(req,res) => {
    try {
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: " review succcessfullydeleted"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;