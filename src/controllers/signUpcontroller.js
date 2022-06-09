import connectionDB from "../postgresConnect.js";

export async function signUpcontroller(req, res){
    
    const {name, email, password} = req.body

    try{
        await connectionDB.query(`
            INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)
        `, [`${name}`, `${email}`, `${password}`]);

        return res.sendStatus(201);

    }catch(e){
        return res.status(500).send(e.detail)
    }
}