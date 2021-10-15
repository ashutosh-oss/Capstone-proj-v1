import joi from "joi";

export const ValidateRestaurantObj = (restaurantObj) => {
    const Schema = joi.object({
        city: joi.string().required(),
    });
    return Schema.validateAsync(restaurantObj);
};

export const ValidateParticularRes = (particularRes) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });
    return Schema.validateAsync(particularRes);
};
export const ValidateParticularResString = (particularResStr) => {
    const Schema = joi.object({
        name: joi.string().required(),
    });
    return Schema.validateAsync(particularResStr);
}