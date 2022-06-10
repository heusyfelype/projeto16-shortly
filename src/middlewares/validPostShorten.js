import postShortenSchema from "./schemas/postShortenSchema.js";

export function validPostShorten(req, res, next){
    // const authorization = req.headers.authorization;
    // const id = req.headers.id;
    // //const token = authorization?.replace("Bearer ", "").trim(); 

    // if(!authorization){
    //     return res.status(401).send("Ops! There's no Bearer Authorization present in header from request.");
    // }
    // if(!id){
    //     return res.status(401).send("Ops! There's no user id present in header from request.");
    // }


    const url = req.body;

    const isValidUrl = postShortenSchema.validate(url, { abortEarly: false });

    if(isValidUrl.error){
        return res.status(422).send(isValidUrl.error.details[0].message);
    };

    next();


}