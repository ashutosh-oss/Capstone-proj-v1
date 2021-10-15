import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
    name: {type: String, required: true},
    descript: {type: String, required: true},
    isVeg: {type: Boolean, required: true},
    isContainsEgg: {type: Boolean, required: true},
    isNonveg:{type:Boolean,required:true},
    category: {type: String, required: true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price: {type: Number, default: 150, required: true},
    addOns: [{
          type: mongoose.Types.ObjectId,
          ref: "Foods",
    }],
    restuarants: [{
        type: mongoose.Types.ObjectId,
        ref: "Restuarants",
        required: true,
    }],
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Reviews",
    }],
},
{
    timestamps: true,
 });

export const FoodModel = mongoose.model("Foods", FoodSchema);