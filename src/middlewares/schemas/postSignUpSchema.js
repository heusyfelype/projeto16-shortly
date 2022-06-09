import Joi from 'joi';

const postSignUpSchema = Joi.object({
	"name": Joi.string().min(2).required(),
    "email": Joi.string().required(),
    "password": Joi.string().min(4).required(),
    "confirmPassword": Joi.ref('password')
});

export default postSignUpSchema;