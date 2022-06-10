import connectionDB from "../postgresConnect.js";


export async function deleteUrlsController(req, res) {
    const id = parseInt(req.params.id); //id do link para ser deletado

    const authorization = req.headers.authorization;
    const userId = parseInt(req.headers.id);

    try {

        const link = await connectionDB.query(`
            SELECT * FROM links WHERE "id" = $1
        `, [id])
        if (!link.rowCount) {
            console.log("ta caindo aqui", "link.rows[0].userId: " + link.rows[0].userId, " userId: " + userId)
            return res.sendStatus(404);
        }
        if (link.rows[0].userId !== userId) {
            return res.sendStatus(401);
        }

        await connectionDB.query(`
            DELETE FROM links WHERE "id" = $1
        `, [id])

        return res.sendStatus(204);

    } catch (e) {
        return res.status(500).send(e.detail)
    }
}