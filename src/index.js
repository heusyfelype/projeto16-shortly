import express, {json} from "express";
import cors from 'cors';
import dotenv from 'dotenv';






dotenv.config();
const app = express();
app.use(cors());
app.use(json());



const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});