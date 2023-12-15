import Joi from 'joi'

const loginScheme=Joi.object({
    first_name:Joi.string().min(3),
    last_name:Joi.string().min(3),
    user_name:Joi.string().required(),
    password:Joi.string().required().min(8).max(16)
})

export default {
    loginScheme
}