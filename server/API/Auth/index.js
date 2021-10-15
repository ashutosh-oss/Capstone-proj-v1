//Libraries
import express from "express";
import passport from "passport";


//Models
import { UserModel } from "../../database/allModels";


//data validation
import { ValidateSignIn, ValidateSignUp } from "../../Validation/auth";



const Router = express.Router();

/*
Route   /signup
des     regisgering with new user
Params   none
Access   public
Method   Post
*/
Router.post("/signup", async(req, res) => {
    try{
          //data validation 
         await ValidateSignUp(req.body.credentials);
          

          //check whether email exists or phonenumber exists or not
          await UserModel.findbyEmailAndPhone(req.body.credentials);

          
          // save To DB
         const newUser = await UserModel.create(req.body.credentials);
    

          // generate JWT token
          const token = newUser.generateJwtToken ();

          return res.status(200).json({token, status: "success"});
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route   /signin
des     Signin using email and password
Params   none
Access   public
Method   Post
*/

Router.post("/signin", async(req, res) => {
    try{
           //data validation 
           await ValidateSignIn(req.body.credentials);
          //check whether email exists or phonenumber exists or not
         const user =  await UserModel.findbyEmailAndPassword(req.body.credentials);
          // generate JWT token
          const token = user.generateJwtToken ();

          return res.status(200).json({token, status: "success"});
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
});
/*
Route   /google
des     google signin
Params   none
Access   public
Method   GET
*/

Router.get("/google", passport.authenticate("google", { scope: ["https://www.googleapis.com/auth/userinfo.profile",
"https://www.googleapis.com/auth/userinfo.email",],
})
);

/*
Route   /google
des     google signin
Params   none
Access   public
Method   GET
*/

Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/"}), (req,res) => {
    return res.json({ token: req.session.passport.user.token});
}
);

export default Router;