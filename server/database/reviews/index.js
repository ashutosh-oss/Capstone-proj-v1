import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
      food: {type: mongoose.Types.ObjectId, ref: "Foods"},
      restuarant: {type: mongoose.Types.ObjectId, ref: "Restuarants"},
      user: {type: mongoose.Types.ObjectId, ref: "Users"},
      ratings: {type: Number, required: true},
      reviewText: {type: String, required: true},
      isFoodReview: Boolean,
      isRestaurantReview: Boolean,
      photos: [
          {
            type: mongoose.Types.ObjectId, 
            ref: "Images"
          },
      ],
},
{
   timestamps: true,
});

export const ReviewModel = mongoose.model("Reviews", ReviewsSchema);