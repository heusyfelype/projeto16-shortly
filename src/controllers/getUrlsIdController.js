import connectionDB from "../postgresConnect.js";


export async function getUrlsIdController(req, res){
    const id = parseInt(req.params.id);

    try{

        const linkEncurtado = await connectionDB.query(`
            SELECT "id", "linkEncurtado" as "shortUrl", "linkOriginal" as "url" FROM links WHERE "id" = $1
        `, [id])

        if(!linkEncurtado.rowCount){
            return res.sendStatus(404);
        }

        console.log(linkEncurtado.rows[0])

        return res.status(200).send(linkEncurtado.rows[0])

    }catch(e){
        return res.status(500).send(e.detail)
    }
}