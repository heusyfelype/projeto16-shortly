import connectionDB from "../postgresConnect.js";
//import dotenv from "dotenv"

export async function teste(req, res){
    console.log("veio até aqui!")
    try{
        const tryTest = await connectionDB.query(`
            SELECT * FROM testes
        `);

        console.log(tryTest)
        return res.send(tryTest);

    }catch(e){
        return res.status(500).send(e.detail)
    }
}