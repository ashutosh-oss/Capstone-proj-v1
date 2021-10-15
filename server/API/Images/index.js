//importing the required libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//importing foodmodel
import { ImageModel } from "../../database/allModels";

//validation
import { ValidateImgLoc } from "../../Validation/images";
//Utilities
import { s3Upload } from "../../Utils/AWS/s3";


const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route   /
des     Get image details
Params   _id
Access   public
Method   POST
*/
Router.get("/:_id", async(req,res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({image});
    } catch (error) {
    return res.status(500).json({error: error.message});
  }
})

/*
Route   /
des     to PUSH ALL THE GIVEN IMAGES TO aws s3 Bucket, and giving access to our server to push them
Params   id
Access   public
Method   POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
      const file = req.file;
      
      //  s3 bucket options
      const bucketOptions = { 
          Bucket: "zomatomaster2001",
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read", // Access Control List
       };
          
       const uploadImage = await s3Upload(bucketOptions);
       await ImageModel.create({images: [ {location: uploadImage.Location}]});

       return res.status(200).json({ uploadImage });
      
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
});

  
  // @Route   DELETE /images/delete/single
  // @des     delete one image
  // @access  PRIVATE
  Router.delete(
    "/delete/single",
    passport.authenticate("jwt"),
    async (req, res) => {
      try {
        const deleteOneImage = await ImageModel.findByIdAndUpdate(
          req.body.imageData.parentID,
          {
            $pull: { images: { _id: req.body.imageData.imageID } },
          },
          { new: true }
        );
        console.log(deleteOneImage);
        return res.json({ images: Boolean(deleteOneImage) });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  );
  
  // @Route   DELETE /images/delete
  // @des     delete all image
  // @access  PRIVATE
  Router.delete("/delete/", passport.authenticate("jwt"), async (req, res) => {
    try {
      const deleteImage = await ImageModel.findByIdAndDelete(
        req.body.imageData.parentID
      );
      return res.json({ images: Boolean(deleteImage) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;