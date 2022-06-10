import connectionDB from "../postgresConnect.js";

export async function getUsersController(req, res) {
    const userId = parseInt(req.params.id);

    try {
        const infosUser = await connectionDB.query(`
            SELECT u.id, u.name, SUM(links.acessos) as "visitCount" 
            FROM users u 
            LEFT JOIN links ON links."userId" = u.id 
            WHERE u."id" = $1 
            GROUP BY (u.name, u.id)
        `, [userId]);

        if(!infosUser.rowCount){
            return res.sendStatus(404);
        }

        const allLinks = await connectionDB.query(`
            SELECT * FROM links WHERE "userId" = $1
        `, [userId]);

        infosUser.rows[0].shortenedUrls = allLinks.rows
        
        return res.status(200).send(infosUser.rows[0]);

    } catch (e) {
        return res.status(500).send(e.detail)
    }
}