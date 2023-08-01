const joi = require("joi");

const validateRegister = data => {

    const schema = joi.object({
        username: joi.string().required(),
        email: joi.string().email().min(6).required(),
        password: joi.string().required(),
    });
    return schema.validate(data);
}
const loginValidation = data => {
    const schema = joi.object({

        email: joi.string().email().required(),
        password: joi.string().required(),
    });
    return schema.validate(data);
}

module.exports = {  validateRegister , loginValidation };