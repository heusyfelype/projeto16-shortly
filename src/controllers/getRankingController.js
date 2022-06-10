import connectionDB from "../postgresConnect.js";
//import dotenv from "dotenv"

export async function getRankingController(req, res){

    try{
        const ranking = await connectionDB.query(`
            SELECT u.id, 
            u.name, 
            COUNT(l.acessos) AS "linksCount", 
            SUM(l.acessos) AS "visitCount"  
            FROM links l 
            LEFT JOIN users u ON u."id" = l."userId" 
            GROUP BY ("userId", u.id, u.name) 
            ORDER BY ("visitCount") DESC 
            LIMIT 10
        `);

        return res.send(ranking.rows);

    }catch(e){
        return res.status(500).send(e.detail)
    }
}