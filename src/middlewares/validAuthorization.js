import connectionDB from "../postgresConnect.js";


export async function validAuthorization(req, res, next) {
    let authorization = req.headers.authorization;
    authorization = authorization?.replace("Bearer ", "").trim()
    const id = parseInt(req.headers.id);
    //const token = authorization?.replace("Bearer ", "").trim(); 

    if (!authorization) {
        return res.status(401).send("Ops! There's no Bearer Authorization present in header from request.");
    }
    if (!id) {
        return res.status(401).send("Ops! There's no user id present in header from request.");
    }

    //talvez aqui tenha que colocar um "try select nam from users where id = is"

    try{
        let userSection = await connectionDB.query(`
            SELECT * FROM autorizacao WHERE "userId" = $1 AND "token" = $2
         
        `, [id, `${authorization}`])

        if(!userSection.rowCount){
            return res.sendStatus(401);
        }

        next();

    }catch(e){
        return res.status(500).send(e.detail)
    }

    
}