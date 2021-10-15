import mongoose, { Mongoose } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [{detail: {type: String}, for: {type: String}}],
    phoneNumber: [{type: Number}],
},
{
    timestamps: true,
 });

 UserSchema.methods.generateJwtToken = function () {
     return jwt.sign({ user: this._id.toString() }, "AskSiddarth");
 };

UserSchema.statics.findbyEmailAndPhone = async ({ email,phoneNumber }) => {
    //checking whether user exists or not
    const checkUserbyEmail = await UserModel.findOne({email});
    const checkUserbyPhone = await UserModel.findOne({phoneNumber});

if(checkUserbyEmail || checkUserbyPhone){
        throw new Error("User already exists");
} 
return false;
};

UserSchema.statics.findbyEmailAndPassword = async ({ email,password }) => {
    // check whther user exists
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User does not exists!!!");

    //comparing the password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if(!doesPasswordMatch) throw new Error("invalid Password!!!");

    return user;
};

UserSchema.pre("save", function(next) {
    const user = this;

    //password is modified
    if(!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8, (error,salt) => {
        if (error) return next(error);
         //hashing the password
         bcrypt.hash(user.password, salt, (error,hash) => {
         if (error) return next(error);

        //assigning hashed password
        user.password = hash;
        return next();
    });
});
});
export const UserModel = mongoose.model("Users", UserSchema);