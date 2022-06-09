import postSignUpSchema from "./schemas/postSignUpSchema.js";

export function validPostSignUp(req, res, next){
    const infosSignUp = req.body;

    const isValidPostSignUp = postSignUpSchema.validate(infosSignUp, { abortEarly: false });

    if(isValidPostSignUp.error){
        return res.status(422).send(isValidPostSignUp.error)
    };

    next();
}