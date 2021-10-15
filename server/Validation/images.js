import joi from "joi";

export const ValidateImgLoc = (imgLoc) => {
    const Schema = joi.object({
        location: joi.string().required(),
    });
    return Schema.validateAsync(imgLoc);
};