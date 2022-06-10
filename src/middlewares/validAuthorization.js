export function validAuthorization(req, res, next) {
    const authorization = req.headers.authorization;
    const id = req.headers.id;
    //const token = authorization?.replace("Bearer ", "").trim(); 

    if (!authorization) {
        return res.status(401).send("Ops! There's no Bearer Authorization present in header from request.");
    }
    if (!id) {
        return res.status(401).send("Ops! There's no user id present in header from request.");
    }

    //talvez aqui tenha que colocar um "try select nam from users where id = is"

    next();
}