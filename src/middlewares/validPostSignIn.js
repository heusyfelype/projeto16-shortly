import postSignInSchema from "./schemas/postSignInSchema.js";

export function validPostSignIn(req, res, next){
    const infosSignIn = req.body;

    const isValidPostSignIn = postSignInSchema.validate(infosSignIn, { abortEarly: false });

    if(isValidPostSignIn.error){
        return res.status(422).send(isValidPostSignIn.error.details[0].message);
    };

    next();
}