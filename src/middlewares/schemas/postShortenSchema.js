import Joi from 'joi';

const postShortenSchema = Joi.object({
    "url": Joi.string().pattern(/^http/).required(),
});

export default postShortenSchema;