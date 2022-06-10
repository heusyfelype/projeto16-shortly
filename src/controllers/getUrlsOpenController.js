import connectionDB from "../postgresConnect.js";


export async function getUrlsOpenController(req, res){
    const shortUrl = req.params.shortUrl;

    try{

        const link = await connectionDB.query(`
            SELECT "linkOriginal" FROM links WHERE "linkEncurtado" = $1
        `, [`${shortUrl}`]);

        if(!link.rowCount){
            return res.sendStatus(404);
        }

        console.log(link.rows[0].linkOriginal)

        return res.redirect(link.rows[0].linkOriginal)

    }catch(e){
        return res.status(500).send(e.detail)
    }
}