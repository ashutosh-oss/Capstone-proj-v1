import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

const GoogleStratergy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStratergy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRETKEY,
            callbackURL: "http://localhost:4000/auth/google/callback",
        }, async ( accessToken, refreshToken, profile, done) => {
            //creating the newUser object
            const newUser = {
                fullname: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value,
            };

            try{
                //check whether user exists or not
                 const user = await UserModel.findOne({email: newUser.email});

                 if(user){
                     // generate token
                    const token = user.generateJwtToken();
                    //return user
                     done(null,{user,token});
                 }
                 else{
                     //if user doesnot exists create new user object
                     const user = await UserModel.create(newUser);
                     // generate token
                     const token = user.generateJwtToken();
                     //return user 
                     done(null,{user,token});
                 }
            } catch (error) {
                done(error,null);
            }
        }
      )
    );

    passport.serializeUser((userData, done) => done(null,{...userData}));
    passport.deserializeUser((id, done) => done(null,id));

};