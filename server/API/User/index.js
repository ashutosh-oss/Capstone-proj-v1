//importing the required libraries
import express from "express";
import passport from "passport";

//importing foodmodel
import { UserModel } from "../../database/allModels";

const Router = express.Router();
/*
Route   /:_id
des     get user data
Params   id
Access   public
Method   GET
*/

Router.get("/:_id", async(req,res) => {
    try {
        const {_id} = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({user: getUser});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});
/*
Route   /update
des     update user id
Params   id
Body     user data
Access   public
Method   PUT
*/
Router.patch("/update", async (req, res) => {
    try {
      const { userData } = req.body;
      if (userData.password) {
        const salt = await bcrypt.genSalt(8);
        const hashPassword = await bcrypt.hash(userData.password, salt);
        userData.password = hashPassword;
      }
  
      const updateUserProfile = await UserModel.findByIdAndUpdate(
        userData._id,
        {
          $set: userData,
        },
        { new: true }
      );
      return res.json({ user: updateUserProfile });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
export default Router;