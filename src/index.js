import express, {json} from "express";
import cors from 'cors';
import dotenv from 'dotenv';



import postSignUpRouter from './routers/postSignUpRouter.js';
import postSignInRouter from './routers/postSignInRouter.js';
import postShortenRouter from './routers/postShortenRouter.js';
import getUrlsIdRouter from './routers/getUrlsIdRouter.js';
import getUrlsOpenRouter from './routers/getUrlsOpenRouter.js';
import deleteRouter from './routers/deleteRouter.js';
import getUsersRouter from "./routers/getUsersRouter.js"; 
import getRankingRouter from './routers/getRankingRouter.js';



dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use(postSignUpRouter);
app.use(postSignInRouter);
app.use(postShortenRouter);
app.use(getUrlsIdRouter);
app.use(getUrlsOpenRouter);
app.use(deleteRouter);
app.use(getUsersRouter);
app.use(getRankingRouter);

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});