import connectionDB from "../postgresConnect.js";
import bcrypt from 'bcrypt';
import {v4} from "uuid";

export async function signInController(req, res){

const {email, password} = req.body;

    try{

        const user = await connectionDB.query(`
            SELECT * FROM users WHERE "email" = $1
        `, [`${email}`])

        if(!user.rowCount || !bcrypt.compareSync(password, user.rows[0].password) ){
            res.sendStatus(401);
        }

        const token = v4();
        const insertSessionUser = await connectionDB.query(`
            INSERT INTO autorizacao ("userId", "token" ) VALUES ($1, $2)
        `, [`${user.rows[0].id}`, `${token}`]);

        if(!insertSessionUser.rowCount){
            res.sendStatus(444);
        }

        return res.status(200).send({id: user.rows[0].id , token: token})
        

    }catch(e){
        return res.status(500).send(e.detail)
    }
}