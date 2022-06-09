import connectionDB from "../postgresConnect.js";
import bcrypt from 'bcrypt';

export async function signUpcontroller(req, res){
    
    const {name, email, password} = req.body

    let bcryptPassword = bcrypt.hashSync(password, 10)

    try{
        await connectionDB.query(`
            INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)
        `, [`${name}`, `${email}`, `${bcryptPassword}`]);

        return res.sendStatus(201);

    }catch(e){
        return res.status(500).send(e.detail)
    }
}