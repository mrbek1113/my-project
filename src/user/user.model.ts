import Joi from "joi"
const createUserScheme=Joi.object({
    first_name:Joi.string().required(),
    last_name:Joi.string().required(),
    user_name:Joi.string().required().min(4).max(16),
    password:Joi.string().required(),
    phone:Joi.string(),
})
const deleteUserSchema=Joi.object({
    first_name:Joi.string(),
    last_name:Joi.string(),
    user_name:Joi.string().min(4).max(16),
    password:Joi.string()
})

export default {
    createUserScheme,
    deleteUserSchema
}