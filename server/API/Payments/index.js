//Libraries
import express from "express"
import passport from "passport"
import {v4 as uuid} from "uuid"

//DatabaseModelS
import {MenuModel,ImageModel} from "../../database/allModels"

const Router = express.Router();

Router.post("/new", async(req,res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZOR_ID,
            key_secret: process.env.RAZOR_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: `order_reciept_${uuid()}`
          };
         const order = await instance.orders.create(options);

         return res.json({order});
         
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})
export default Router;