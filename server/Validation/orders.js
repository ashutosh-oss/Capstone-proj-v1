import joi, { required } from "joi";

export const ValidateUserOrd = (userOrd) => {
    const Schema = joi.object({
        _id: joi.string().required(), 
    });
    return Schema.validateAsync(userOrd);
};
export const ValidateUserOrdDet = (userOrdDet) => {
    const Schema = joi.object({
        _id: joi.string().required(), 
    });
    return Schema.validateAsync(userOrdDet);
};