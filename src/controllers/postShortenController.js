import connectionDB from "../postgresConnect.js";
//import dotenv from "dotenv"
import { nanoid } from "nanoid";

export async function postShortenController(req, res){
    
    const {url} = req.body;
    const {id} = req.headers
    const shortUrl = nanoid(10);

    console.log(url, shortUrl, id)

    try{
        const find = await connectionDB.query(`
            SELECT * FROM links WHERE "userId" = $1 AND "linkOriginal" = $2
        `, [id, `${url}`]);

        console.log("find rowCount: " +  find.rowCount)
        if(find.rowCount){
            return res.status(302).send({shortUrl : find.rows[0].linkEncurtado});
        }

        const insert = await connectionDB.query(`
            INSERT INTO links ("userId", "linkOriginal", "linkEncurtado") VALUES ($1, $2, $3)
        `, [id, `${url}`, `${shortUrl}`]);

        //console.log(tryTest)
        return res.status(201).send({shortUrl : shortUrl});

    }catch(e){
        return res.status(500).send(e.detail)
    }
}