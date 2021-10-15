import joi from "joi";

export const ValidateMenuId = (menuId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });
    return Schema.validateAsync(menuId);
};

export const ValidateMenuImg = (menuImg) => {
    const Schema = joi.object({
        location: joi.string().required(),
    });
    return Schema.validateAsync(menuImg);
};