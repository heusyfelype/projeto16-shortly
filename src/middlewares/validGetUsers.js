import connectionDB from "../postgresConnect.js";


export async function validGetUsers(req, res, next) {
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

    try {
        let userExist = await connectionDB.query(`
            SELECT * FROM users WHERE "id" = $1
        `, [id])

        if (!userExist.rowCount) {
            return res.sendStatus(404);
        }


        let userSection = await connectionDB.query(`
            SELECT * FROM autorizacao WHERE "userId" = $1 AND "token" = $2
         
        `, [id, `${authorization}`])

        if (!userSection.rowCount) {
            console.log("Este é o primeiro 401")
            return res.sendStatus(401);
        }

        next();

    } catch (e) {
        return res.status(500).send(e.detail)
    }


}